import { IsString, IsOptional, MaxLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class EditarMedicamentoDto {
 
  @ApiPropertyOptional({ example: 'Dipirona 1g' })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  nome?: string;
 
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  @MaxLength(255)
  fotoURL?: string;
 
}
