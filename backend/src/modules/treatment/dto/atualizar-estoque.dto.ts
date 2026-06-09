import { IsInt, IsPositive, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
 
export class AtualizarEstoqueDto {
 
  @ApiProperty({ example: 30, description: 'Quantidade atual em estoque' })
  @IsInt()
  @IsPositive()
  qtdAtual!: number;
 
  @ApiPropertyOptional({ example: 5, description: 'Quantidade mínima para aviso de reposição' })
  @IsInt()
  @IsPositive()
  @IsOptional()
  qtdMinimaAviso?: number;
 
}
 
