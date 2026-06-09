
import {
  IsInt, IsPositive, IsDateString, IsOptional,
  IsEnum, IsArray, Matches, ValidateNested,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { FrequenciaTipo } from '../entities/frequencia.entity';

export class CriarTratamentoDto {

  @ApiProperty({ example: 1, description: 'ID do medicamento' })
  @IsInt()
  @IsPositive()
  medicamentoId!: number;

  @ApiProperty({ example: '2025-06-01T08:00:00' })
  @IsDateString()
  inicioTratamento!: string;

  @ApiPropertyOptional({ example: '2025-07-01T08:00:00' })
  @IsDateString()
  @IsOptional()
  fimTratamento?: string;

  @ApiProperty({ example: 1, description: 'Quantidade de unidades por dose' })
  @IsInt()
  @IsPositive()
  qtdPorDose!: number;

  // Frequência 

  @ApiProperty({ enum: FrequenciaTipo, example: FrequenciaTipo.CUSTOM })
  @IsEnum(FrequenciaTipo)
  frequenciaTipo!: FrequenciaTipo;

  // Custom — lista de horários fixos (ex: ['08:00', '20:00'])
  @ApiPropertyOptional({ type: [String], example: ['08:00', '20:00'] })
  @IsArray()
  @IsOptional()
  @Matches(/^\d{2}:\d{2}$/, { each: true, message: 'Horário deve estar no formato HH:MM' })
  horarios?: string[];

  // Intervalo — a cada X horas
  @ApiPropertyOptional({ example: 8 })
  @IsInt()
  @IsPositive()
  @IsOptional()
  intervaloHoras?: number;

  // Ciclo — X dias ativo, Y dias repouso
  @ApiPropertyOptional({ example: 21 })
  @IsInt()
  @IsPositive()
  @IsOptional()
  cicloAtivo?: number;

  @ApiPropertyOptional({ example: 7 })
  @IsInt()
  @IsPositive()
  @IsOptional()
  cicloRepouso?: number;

}