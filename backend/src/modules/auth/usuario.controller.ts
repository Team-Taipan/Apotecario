import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CriarContaDto } from './dto/criar-usuario.dto';
import { UpdateUserDto } from './dto/atualizar-usuario.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'; // Importa o decorador ApiTags para organizar a documentação do Swagger por categorias

@ApiTags('Contas') // Agrupa no Swagger
@Controller('usuario')
export class UsuarioController {

  constructor(private readonly usuarioService: UsuarioService) {}

  // O endpoint de registro agora espera um criarContaDto, que tem validações automáticas graças ao ValidationPipe configurado no main.ts
  @Post()
  @ApiOperation({ summary: 'Cria uma nova conta de usuário' })
  @ApiResponse({ status: 201, description: 'Conta criada com sucesso.' })
  async criar(@Body() criarContaDto: CriarContaDto) {

    return this.usuarioService.criarUsuario(criarContaDto);

  }

  @Get()
  async findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usuarioService.update(+id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}
