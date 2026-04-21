import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { UsuarioModule } from './modules/auth/usuario.module';
import mikroOrmConfig from '../mikro-orm.config';

@Module({
  
  imports: [ 
            MikroOrmModule.forRoot(mikroOrmConfig),  // Configura o MikroORM usando as opções definidas em mikro-orm.config.ts
            UsuarioModule 
          ],

})

export class AppModule {}

/* Obs: o AppModule é o nosso módulo raíz, é ele que serve como base para todos os outros
        modulos da nossa aplicação, servindo como o ponto de partida para o Nest construir o gráfico da nossa
        aplicação

Referência: https://docs.nestjs.com/modules        
*/ 