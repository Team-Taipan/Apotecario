import { Injectable, ForbiddenException, BadRequestException } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/mysql';
import { Tratamento } from './entities/tratamento.entity';
import { Frequencia, FrequenciaTipo } from './entities/frequencia.entity';
import { Horario } from './entities/horario.entity';
import { Medicamento } from '../medicine/entities/medicamento.entity';
import { Perfil } from '../user/entities/perfil.entity';
import { CriarTratamentoDto } from './dto/criar-tratamento.dto';
import { AtualizarTratamentoDto } from './dto/atualizar-tratamento.dto';

@Injectable()
export class TratamentoService {
  constructor(private readonly em: EntityManager) {}

 
  async criarTratamento(perfilId: number, dto: CriarTratamentoDto) {
    this.validarFrequencia(dto.frequenciaTipo, dto);

    const perfil = await this.em.findOneOrFail(Perfil, { id: perfilId });
    const medicamento = await this.em.findOneOrFail(Medicamento, { id: dto.medicamentoId });

    // Cria a frequência
    const frequencia = this.em.create(Frequencia, {
      tipo: dto.frequenciaTipo,
      intervaloHoras: dto.intervaloHoras,
      cicloAtivo: dto.cicloAtivo,
      cicloRepouso: dto.cicloRepouso,
    });
    await this.em.persist(frequencia);

    // Cria os horários se for Custom
    if (dto.frequenciaTipo === FrequenciaTipo.CUSTOM && dto.horarios?.length) {
      for (const hora of dto.horarios) {
        const horario = this.em.create(Horario, { hora: hora, frequencia });
        this.em.persist(horario);
      }
    }

    // Cria o tratamento
    const tratamento = this.em.create(Tratamento, {
      inicioTratamento: new Date(dto.inicioTratamento),
      fimTratamento: dto.fimTratamento ? new Date(dto.fimTratamento) : undefined,
      qtdPorDose: dto.qtdPorDose,
      frequencia,
      medicamento,
      perfil,
    });

    await this.em.persist(tratamento).flush();
    return tratamento;
  }

  // Lista os tratamentos ativos do perfil
  async listarTratamentos(perfilId: number) {
    return this.em.find(
      Tratamento,
      { perfil: { id: perfilId } },
      { populate: ['medicamento', 'frequencia', 'frequencia.horarios'] },
    );
  }


  // Validação das regras de frequência
  private validarFrequencia(tipo: FrequenciaTipo, dto: Partial<CriarTratamentoDto & AtualizarTratamentoDto>) {
    if (tipo === FrequenciaTipo.CUSTOM && !dto.horarios?.length) {
      throw new BadRequestException('Frequência Custom exige ao menos um horário');
    }
    if (tipo === FrequenciaTipo.INTERVALO && !dto.intervaloHoras) {
      throw new BadRequestException('Frequência Intervalo exige intervaloHoras');
    }
    if (tipo === FrequenciaTipo.CICLO && (!dto.cicloAtivo || !dto.cicloRepouso)) {
      throw new BadRequestException('Frequência Ciclo exige cicloAtivo e cicloRepouso');
    }
  }
}