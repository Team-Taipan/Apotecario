import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { PerfilService } from './perfil.service';
import { PerfilController } from './perfil.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Conta } from './entities/conta.entity';
import { Perfil } from './entities/perfil.entity';
import { Vinculo } from './entities/vinculo.entity';
import { Parentesco } from './entities/parentesco.entity';

@Module({
  // Aqui registramos as entidades para que o MikroORM possa gerenciá-las
  imports: [MikroOrmModule.forFeature([Conta, Perfil, Vinculo, Parentesco])],
  controllers: [UsuarioController, PerfilController],
  providers: [UsuarioService, PerfilService],
})
export class UsuarioModule {}
