import { Controller, Post, Get, Body, UseGuards, Req } from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { CriarPerfilDto } from './dto/criar-perfil.dto';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';

@ApiTags('Perfis')
@ApiBearerAuth()
@UseGuards(AuthGuard) // Protege todas as rotas deste controlador com o AuthGuard, que verifica o JWT
@Controller('perfil')
export class PerfilController {
  constructor(private readonly perfilService: PerfilService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um perfil e o vincula à conta logada' })
  async criar(@Body() dto: CriarPerfilDto, @Req() req: any) {
    // O ID da conta vem do payload do JWT configurado no AuthGuard
    const contaId = req.user.sub; 
    return this.perfilService.criarPerfil(contaId, dto);
  }

  @Get('me')
  @ApiOperation({ summary: 'Lista todos os perfis vinculados à conta logada' })
  async listarMeusPerfis(@Req() req: any) {
    const contaId = req.user.sub;
    return this.perfilService.listarPerfisPorUsuario(contaId);
  }
}