import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CriarContaDto } from './dto/criar-usuario.dto';
import { AtualizarContaDto } from './dto/atualizar-usuario.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'; // Importa o decorador ApiTags para organizar a documentação do Swagger por categorias
import { LoginDto } from './dto/fazer-login.dto';


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

  @Get("all")
  async buscarTodos() {
    return this.usuarioService.buscarTodosUsuarios();
  }

  @Get(':id')
  async buscarUsuario(@Param('id') id: string) {
    return this.usuarioService.buscarUsuarioPorID(+id);
  }

  @Patch(':id')
  async atualizar(@Param('id') id: string, @Body() atualizarContaDto : AtualizarContaDto) {
    return this.usuarioService.atualizarUsuario(+id, atualizarContaDto);
  }

  @Delete(':id')
  async remover(@Param('id') id: string) {
    return this.usuarioService.removerUsuario(+id);
  }

  @Post("login")
  @ApiOperation({ summary: 'Faz o login de uma conta de usuário' })
  @ApiResponse({ status: 200, description: 'Login realizado com sucesso' })
  async fazerLogin(@Body() loginDto: LoginDto) {
    return this.usuarioService.validarLogin(loginDto);
  }

  // TODO: Função de recuperarSenha
  

}
