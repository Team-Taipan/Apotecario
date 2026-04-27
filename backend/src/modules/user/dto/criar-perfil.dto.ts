import { IsNotEmpty, IsString, IsEnum, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CriarPerfilDto {
  @ApiProperty({ example: 'João Silva' })
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  @IsString({ message: 'O nome deve ser uma string' })
  nome!: string; 

  @ApiProperty({ example: 'avatar_1.png' })
  @IsNotEmpty({ message: 'O avatar é obrigatório' })
  @IsString({ message: 'O avatar deve ser uma string' })
  avatar!: string;

  @ApiProperty({ enum: ['Titular', 'Dependente'], example: 'Titular' })
  @IsEnum(['Titular', 'Dependente'], { message: 'O tipo deve ser "Titular" ou "Dependente"' })
  tipo!: string;

  @ApiProperty({ example: 1, description: 'ID do Parentesco' })
  @IsOptional()
  @IsNumber({}, { message: 'O parentescoId deve ser um número' })
  parentescoId?: number; // O ID do parentesco para o vínculo (referência à tabela Parentesco), podendo ser null para o perfil do titular

  @ApiProperty({ enum: ['Admin', 'Cuidador', 'Convidado'], default: 'Admin' })
  @IsEnum(['Admin', 'Cuidador', 'Convidado'], { message: 'O papel deve ser "Admin", "Cuidador" ou "Convidado"' })
  papel!: string; // O papel do usuário em relação ao perfil (ex: Admin, Cuidador, Convidado) da tabela Vinculo
}