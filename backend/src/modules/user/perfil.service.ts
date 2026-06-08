
import { Injectable, ForbiddenException, NotFoundException } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/mysql';
import { Perfil } from './entities/perfil.entity';
import { Vinculo } from './entities/vinculo.entity';
import { Conta } from './entities/conta.entity';
import { Parentesco } from './entities/parentesco.entity';
import { CriarPerfilDto } from './dto/criar-perfil.dto';
import { EditarPerfilDto } from './dto/atualizar-perfil.dto';
 
@Injectable()
export class PerfilService {
  constructor(private readonly em: EntityManager) {}

  async criarPerfil(contaId: number, dto: CriarPerfilDto) {
    // Busca a conta e o parentesco (referências)
    const conta = await this.em.findOneOrFail(Conta, { id: contaId });
    
    // Busca o parentesco apenas se o ID for fornecido no DTO
    const parentesco = dto.parentescoId 
      ? await this.em.findOneOrFail(Parentesco, { id: dto.parentescoId }) 
      : undefined;

    // Cria a entidade Perfil com os dados do DTO
    const perfil = this.em.create(Perfil, {
      nome: dto.nome,
      avatar: dto.avatar,
      tipo: dto.tipo,
    });

    // Cria o Vínculo entre a Conta e o novo Perfil
    const vinculo = this.em.create(Vinculo, {
      conta,
      perfil,
      parentesco,
      papel: dto.papel,
      dataInicio: new Date(),
    });

    // Salva tudo em uma única transação (flush)
    await this.em.persist([perfil, vinculo]).flush();

    return perfil;
  }

  async listarPerfisPorUsuario(contaId: number) {
    // Busca os vínculos para obter os perfis associados
    const vinculos = await this.em.find(Vinculo, 
      { conta: { id: contaId } }, 
      { populate: ['perfil', 'parentesco'] }
    );
    
    // Retorna os perfis com informações adicionais do vínculo (papel e parentesco)
    return vinculos.map(v => ({
      ...v.perfil,
      papel: v.papel,
      parentesco: v.parentesco ? v.parentesco.descricao : null 
    }));
  }

    // Busca um perfil pelo ID, verificando se a conta logada tem vínculo com ele
  async buscarPorId(contaId: number, perfilId: number) {
    const vinculo = await this.em.findOne(
      Vinculo,
      { conta: { id: contaId }, perfil: { id: perfilId } },
      { populate: ['perfil', 'parentesco'] },
    );
 
    if (!vinculo) {
      throw new NotFoundException(`Perfil ${perfilId} não encontrado ou sem acesso`);
    }
 
    return {
      ...vinculo.perfil,
      papel: vinculo.papel,
      parentesco: vinculo.parentesco ? vinculo.parentesco.descricao : null,
    };
  }
 
  // Edita nome e/ou avatar do perfil, desde que a conta logada tenha vínculo com ele
  async editarPerfil(contaId: number, perfilId: number, dto: EditarPerfilDto) {
    // Verifica se a conta tem vínculo com o perfil antes de editar
    const vinculo = await this.em.findOne(Vinculo, {
      conta: { id: contaId },
      perfil: { id: perfilId },
    });
 
    if (!vinculo) {
      throw new ForbiddenException('Sem permissão para editar este perfil');
    }
 
    const perfil = await this.em.findOneOrFail(Perfil, { id: perfilId });
 
    // assign só atualiza os campos que vieram no DTO (PATCH parcial)
    this.em.assign(perfil, dto);
    await this.em.flush();
 
    return perfil;
  }
 
  // Remove o perfil e todos os vínculos associados a ele
  async removerPerfil(contaId: number, perfilId: number) {
    // Garante que a conta logada tem acesso antes de deletar
    const vinculo = await this.em.findOne(Vinculo, {
      conta: { id: contaId },
      perfil: { id: perfilId },
    });
 
    if (!vinculo) {
      throw new ForbiddenException('Sem permissão para remover este perfil');
    }
 
    // Remove todos os vínculos que apontam para esse perfil (outros usuários podem ter vínculo)
    const todosVinculos = await this.em.find(Vinculo, { perfil: { id: perfilId } });
    await this.em.remove(todosVinculos).flush();
 
    // Depois remove o próprio perfil
    const perfil = this.em.getReference(Perfil, perfilId);
    await this.em.remove(perfil).flush();
 
    return { deleted: true };
  }

}