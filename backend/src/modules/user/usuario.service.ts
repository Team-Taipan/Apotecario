import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/mysql';
import { CriarContaDto } from './dto/criar-usuario.dto';
import { AtualizarContaDto } from './dto/atualizar-usuario.dto';
import { Conta } from './entities/conta.entity';
import { NotFoundException, UnauthorizedException } from '@nestjs/common';
import { HashService } from '../auth/hashing/hash.services';
import { LoginDto } from './dto/fazer-login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsuarioService {
  
  constructor(
              private readonly em: EntityManager, // em significa "EntityManager" do MikroORM, que é a principal interface para interagir com o banco de dados, tipo um gerente de operações. Ele é injetado no construtor da classe, permitindo que os métodos do serviço usem o EntityManager para realizar operações de CRUD nas entidades do banco de dados.
              private readonly hashService: HashService,
              private readonly jwtService: JwtService
            ) { } 

  // Método para criar uma conta, usando o DTO e o EntityManager do MikroORM
  async criarUsuario(dto: CriarContaDto) {
    
    // Verificação se o email existe
    const emailJaCadastrado = await this.em.findOne(Conta, { email: dto.email });

    if(emailJaCadastrado) {
      throw new ConflictException('Esse email já está cadastrado');
    }
  
    // Verificação básica (antes de salvar)
    if (dto.senha !== dto.confirmarSenha) {
      throw new BadRequestException('As senhas não conferem');
    }

    const senhaHasheada = await this.hashService.hash(dto.senha);

    // Usando o 'create' do EntityManager (ele já lida melhor com a tipagem)
    const conta = this.em.create(Conta, {
      email: dto.email,
      senha: senhaHasheada
    });

    // Salva e envia para o MySQL
    await this.em.persist(conta).flush();

    return conta;
  }

  async validarLogin(dto: LoginDto) {

    // o populate serve para carregar relações de uma entidade (collections) no momento da consulta, semelhante a um JOIN 
    // ref: https://mikro-orm.io/docs/populating-relations
    const conta = await this.em.findOne(Conta, { email: dto.email }, {  populate: ["vinculoPerfis"] });

    // Verificando se a conta existe
    if(!conta) {
      throw new UnauthorizedException('E-mail ou senha incorretos');
    }

    const senhaConfirmada = await this.hashService.compararSenhaHash(dto.senha, conta.senha);

    // verificando se o hash bate com a senha digitada
    if(!senhaConfirmada) {
      throw new UnauthorizedException('E-mail ou senha incorretos');
    }
    
    // se uma conta não possui nenhum vinculo (logo, conta nova), fica pendente a criação de seu perfil
    const perfilPendente = conta.vinculoPerfis.isEmpty(); 
    // o isEmpty é pq estamos lidando com uma Collections ela sempre retorna um objeto do TipoCollection mesma que esteja vazia
    // atualizando o ultimo login do usuario
    conta.ultimoLogin = new Date();
    await this.em.flush();

    const payload = { sub: conta.id, email: conta.email,  exibirIntroducao: perfilPendente }

    return { 
      accessToken: await this.jwtService.signAsync(payload),
      exibirIntroducao: perfilPendente // se for o primeiro acesso, o frontend pode usar essa informação para mostrar uma introdução ou tutorial para o usuário. Depois do primeiro acesso, isso pode ser ignorado.
    };
  }

  async buscarTodosUsuarios() {
    // Busca todas as contas no banco
    return await this.em.find(Conta, {});
  }

  async buscarUsuarioPorID(id: number) {
    const conta = await this.em.findOne(Conta, { id });
    if (!conta) {
      throw new NotFoundException(`Conta com ID ${id} não encontrada`);
    }
    return conta;
  }

  async atualizarUsuario(id: number, atualizarContaDto : AtualizarContaDto) {
    // O 'findOneOrFail' lança um erro 404 automaticamente se o ID não existir
    const conta = await this.em.findOneOrFail(Conta, { id });

    // O 'assign' mescla apenas o que veio na DTO para dentro da entidade
    // Se veio só a senha, ele só altera a senha.
    this.em.assign(conta, atualizarContaDto);

    // O 'flush' envia o UPDATE para o MySQL
    await this.em.flush();

    return conta;
  }

  async removerUsuario(id: number) {
    // O 'getReference' cria um objeto "falso" apenas com o ID 
    // para evitar um SELECT desnecessário antes do DELETE
    const contaRef = this.em.getReference(Conta, id);
    await this.em.remove(contaRef).flush();
    return { deleted: true };
  }

}

// Referência para Bcrypt no Nest: https://docs.nestjs.com/security/encryption-and-hashing