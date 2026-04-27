import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/mysql';
import { Perfil } from './entities/perfil.entity';
import { Vinculo } from './entities/vinculo.entity';
import { Conta } from './entities/conta.entity';
import { Parentesco } from './entities/parentesco.entity';
import { CriarPerfilDto } from './dto/criar-perfil.dto';

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
}