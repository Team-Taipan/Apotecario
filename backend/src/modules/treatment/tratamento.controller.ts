import { Controller, Get, Post, Patch, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { TratamentoService } from './tratamento.service';
import { CriarTratamentoDto } from './dto/criar-tratamento.dto';
import { AtualizarTratamentoDto } from './dto/atualizar-tratamento.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { AtualizarEstoqueDto } from './dto/atualizar-estoque.dto';

@ApiTags('Tratamentos')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('tratamento')
export class TratamentoController {
  constructor(private readonly tratamentoService: TratamentoService) {}


  @Post()
  @ApiOperation({ summary: 'Vincula um medicamento ao tratamento do perfil' })
  @ApiQuery({ name: 'perfilId', required: true })
  async criar(
    @Query('perfilId') perfilId: string,
    @Body() dto: CriarTratamentoDto,
  ) {
    return this.tratamentoService.criarTratamento(+perfilId, dto);
  }


  @Get()
  @ApiOperation({ summary: 'Lista os tratamentos do perfil' })
  @ApiQuery({ name: 'perfilId', required: true })
  async listar(@Query('perfilId') perfilId: string) {
    return this.tratamentoService.listarTratamentos(+perfilId);
  }

  // cria ou atualiza o estoque de um tratamento
  @Patch(':id/estoque')
  @ApiOperation({ summary: 'Atualiza o estoque de medicamento de um tratamento' })
  @ApiQuery({ name: 'perfilId', required: true })
  async atualizarEstoque(
    @Param('id') id: string,
    @Query('perfilId') perfilId: string,
    @Body() dto: AtualizarEstoqueDto,
  ) {
    return this.tratamentoService.atualizarEstoque(+perfilId, +id, dto);
  }


}