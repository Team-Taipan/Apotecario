import { IsInt, IsPositive, IsDateString, IsOptional, IsArray, Matches, IsEnum } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { FrequenciaTipo } from '../entities/frequencia.entity';

export class AtualizarTratamentoDto {

  @ApiPropertyOptional({ example: '2025-07-01T08:00:00' })
  @IsDateString()
  @IsOptional()
  fimTratamento?: string;

  @ApiPropertyOptional({ example: 2 })
  @IsInt()
  @IsPositive()
  @IsOptional()
  qtdPorDose?: number;

  // Frequência 
  @ApiPropertyOptional({ enum: FrequenciaTipo })
  @IsEnum(FrequenciaTipo)
  @IsOptional()
  frequenciaTipo?: FrequenciaTipo;

  @ApiPropertyOptional({ type: [String], example: ['07:00', '19:00'] })
  @IsArray()
  @IsOptional()
  @Matches(/^\d{2}:\d{2}$/, { each: true, message: 'Horário deve estar no formato HH:MM' })
  horarios?: string[];

  @ApiPropertyOptional({ example: 12 })
  @IsInt()
  @IsPositive()
  @IsOptional()
  intervaloHoras?: number;

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