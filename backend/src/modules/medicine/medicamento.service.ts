import { Injectable, ForbiddenException, NotFoundException } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/mysql';
import { Medicamento, MedicamentoOrigem } from './entities/medicamento.entity';
import { Perfil } from '../user/entities/perfil.entity';
import { CriarMedicamentoDto } from './dto/criar-medicamento.dto';
import { EditarMedicamentoDto } from './dto/atualizar-medicamento.dto';

@Injectable()
export class MedicamentoService {
  constructor(private readonly em: EntityManager) {}

  // RF20 — Lista medicamentos da ANVISA com busca por nome (paginado)
  async listarAnvisa(nome: string, pagina: number, limite: number) {
    const offset = (pagina - 1) * limite;

    const [medicamentos, total] = await this.em.findAndCount(
      Medicamento,
      {
        med_origem: MedicamentoOrigem.ANVISA,
        // Filtro por nome só entra se o usuário digitou algo
        ...(nome ? { med_nome: { $like: `%${nome}%` } } : {}),
      },
      {
        populate: ['formas', 'principios', 'dosagens'],
        limit: limite,
        offset,
        orderBy: { med_nome: 'ASC' },
      },
    );

    return {
      data: medicamentos,
      total,
      pagina,
      ultimaPagina: Math.ceil(total / limite),
    };
  }

  // RF04 — Cria um medicamento próprio vinculado ao perfil
  async criarMedicamentoUsuario(perfilId: number, dto: CriarMedicamentoDto) {
    const perfil = await this.em.findOneOrFail(Perfil, { id: perfilId });

    const medicamento = this.em.create(Medicamento, {
      med_nome: dto.nome,
      med_origem: MedicamentoOrigem.USUARIO,
      med_fotoURL: dto.fotoURL,
      perCriador: perfil,
    });

    await this.em.persist(medicamento).flush();
    return medicamento;
  }

  // RF04 — Edita um medicamento próprio (somente o perfil criador pode editar)
  async editarMedicamento(perfilId: number, medicamentoId: number, dto: EditarMedicamentoDto) {
    const medicamento = await this.em.findOneOrFail(Medicamento, { med_codigo: medicamentoId });

    // Garante que só o criador edita, e que não é um medicamento da ANVISA
    if (
      medicamento.med_origem === MedicamentoOrigem.ANVISA ||
      medicamento.perCriador?.id !== perfilId
    ) {
      throw new ForbiddenException('Sem permissão para editar este medicamento');
    }

    if (dto.nome) medicamento.med_nome = dto.nome;
    if (dto.fotoURL !== undefined) medicamento.med_fotoURL = dto.fotoURL;

    await this.em.flush();
    return medicamento;
  }

  // RF04 — Remove um medicamento próprio (somente o perfil criador pode remover)
  async removerMedicamento(perfilId: number, medicamentoId: number) {
    const medicamento = await this.em.findOneOrFail(Medicamento, { med_codigo: medicamentoId });

    if (
      medicamento.med_origem === MedicamentoOrigem.ANVISA ||
      medicamento.perCriador?.id !== perfilId
    ) {
      throw new ForbiddenException('Sem permissão para remover este medicamento');
    }

    await this.em.remove(medicamento).flush();
    return { deleted: true };
  }
}