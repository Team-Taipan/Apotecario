import { IsString, IsOptional, IsEnum } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
 
export class EditarPerfilDto {
  @ApiPropertyOptional({ example: 'João Silva' })
  @IsString()
  @IsOptional()
  nome?: string;
 
  @ApiPropertyOptional({ example: 'https://cdn.example.com/avatar.png' })
  @IsString()
  @IsOptional()
  avatar?: string;
 

  @ApiPropertyOptional({ enum: ['Titular', 'Dependente'] })
  @IsEnum(['Titular', 'Dependente'])
  @IsOptional()
  tipo?: 'Titular' | 'Dependente';
}
 
