import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CriarContaDto } from './dto/criar-usuario.dto';
import { AtualizarContaDto } from './dto/atualizar-usuario.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger'; // Importa o decorador ApiTags para organizar a documentação do Swagger por categorias
import { LoginDto } from './dto/fazer-login.dto';
import { AuthGuard } from '../auth/auth.guard';
import { CriarPerfilDto } from './dto/criar-perfil.dto';


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

  // Novo endpoint para criar o perfil vinculado à conta logada
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Post('perfil')
  @ApiOperation({ summary: 'Cria o perfil inicial do usuário logado' })
  async criarPerfil(@Request() req: any, @Body() dadosPerfil: CriarPerfilDto) {
    return this.usuarioService.vincularPerfil(req.user.sub, dadosPerfil);
  }

  @Get("all")
  async buscarTodos() {
    return this.usuarioService.buscarTodosUsuarios();
  }

  // Exemplo de uso do guard ( n esta verificando o id, isso vc precisa pegar do res, salvamos em um objeto user, la no AuthGuard)
  // @UseGuards(AuthGuard)
  // @ApiBearerAuth()
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

  // AVISO para usar a validação de JWT coloque para usar o AuthGuard @UseGuards(AuthGuard) na rota 
  // confira o arquivo para saber o que é um guard
  // Swagger: adicione @ApiBearerAuth() para ele entender que essa rota usa o Bearer 
  // TODO: Função de recuperarSenha
  

}
