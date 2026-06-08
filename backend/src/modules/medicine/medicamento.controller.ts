import { Controller, Get, Post, Patch, Delete, Body, Param, Query, UseGuards, Req } from '@nestjs/common';
import { MedicamentoService } from './medicamento.service';
import { CriarMedicamentoDto } from './dto/criar-medicamento.dto';
import { EditarMedicamentoDto } from './dto/atualizar-medicamento.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiQuery } from '@nestjs/swagger';

@ApiTags('Medicamentos')
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('medicamento')
export class MedicamentoController {
  constructor(private readonly medicamentoService: MedicamentoService) {}

  
  // GET /medicamento/anvisa?nome=dipirona&pagina=1&limite=20
  // está com paginação
  @Get('anvisa')
  @ApiOperation({ summary: 'Busca medicamentos pré-cadastrados da ANVISA' })
  @ApiQuery({ name: 'nome', required: false })
  @ApiQuery({ name: 'pagina', required: false, example: 1 })
  @ApiQuery({ name: 'limite', required: false, example: 20 })
  async listarAnvisa(
    @Query('nome') nome = '',
    @Query('pagina') pagina = '1',
    @Query('limite') limite = '20',
  ) {
    return this.medicamentoService.listarAnvisa(nome, +pagina, +limite);
  }

  // RF04 — Cria medicamento próprio vinculado ao perfil ativo
  // O perfilId vem como header ou query para saber qual perfil está ativo no momento
  // POST /medicamento?perfilId=1
  @Post()
  @ApiOperation({ summary: 'Cria um medicamento próprio (quando não encontrado na ANVISA)' })
  @ApiQuery({ name: 'perfilId', required: true, description: 'ID do perfil ativo' })
  async criar(
    @Query('perfilId') perfilId: string,
    @Body() dto: CriarMedicamentoDto,
  ) {
    return this.medicamentoService.criarMedicamentoUsuario(+perfilId, dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Edita um medicamento próprio' })
  @ApiQuery({ name: 'perfilId', required: true })
  async editar(
    @Param('id') id: string,
    @Query('perfilId') perfilId: string,
    @Body() dto: EditarMedicamentoDto,
  ) {
    return this.medicamentoService.editarMedicamento(+perfilId, +id, dto);
  }


  @Delete(':id')
  @ApiOperation({ summary: 'Remove um medicamento próprio' })
  @ApiQuery({ name: 'perfilId', required: true })
  async remover(
    @Param('id') id: string,
    @Query('perfilId') perfilId: string,
  ) {
    return this.medicamentoService.removerMedicamento(+perfilId, +id);
  }
}