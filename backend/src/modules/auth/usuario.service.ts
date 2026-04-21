import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/mysql';
import { CriarContaDto } from './dto/criar-usuario.dto';
import { AtualizarContaDto } from './dto/atualizar-usuario.dto';
import { Conta } from './entities/conta.entity';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsuarioService {
  
  constructor(private readonly em: EntityManager) { } // em significa "EntityManager" do MikroORM, que é a principal interface para interagir com o banco de dados, tipo um gerente de operações. Ele é injetado no construtor da classe, permitindo que os métodos do serviço usem o EntityManager para realizar operações de CRUD nas entidades do banco de dados.

  // Método para criar uma conta, usando o DTO e o EntityManager do MikroORM
  async criarUsuario(dto: CriarContaDto) {
    // Verificação básica (antes de salvar)
    if (dto.senha !== dto.confirmarSenha) {
      throw new Error('As senhas não conferem');
    }

    // Usando o 'create' do EntityManager (ele já lida melhor com a tipagem)
    const conta = this.em.create(Conta, {
      email: dto.email,
      senha: dto.senha,
      ultimoLogin: new Date(),
    });

    // Salva e envia para o MySQL
    await this.em.persist(conta).flush();

    return conta;
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
