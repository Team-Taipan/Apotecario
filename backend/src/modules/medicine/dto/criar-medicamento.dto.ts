import { IsString, IsOptional, MaxLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
 
// Usado ao criar um medicamento próprio (USUARIO)
export class CriarMedicamentoDto {
 
  @ApiProperty({ example: 'Dipirona 500mg' })
  @IsString()
  @MaxLength(100)
  nome!: string;
 
  @ApiPropertyOptional({ example: 'https://cdn.example.com/foto.png' })
  @IsString()
  @IsOptional()
  @MaxLength(255)
  fotoURL?: string;
 
}
