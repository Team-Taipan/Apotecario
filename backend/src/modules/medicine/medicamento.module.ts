
import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { MedicamentoService } from './medicamento.service';
import { MedicamentoController } from './medicamento.controller';
import { Medicamento } from './entities/medicamento.entity';
import { Forma } from './entities/forma.entity';
import { PrincipioAtivo } from './entities/principio.entity';
import { Dosagem } from './entities/dosagem.entity';
 
@Module({
  imports: [MikroOrmModule.forFeature([Medicamento, Forma, PrincipioAtivo, Dosagem])],
  controllers: [MedicamentoController],
  providers: [MedicamentoService],
  // Exporta o service para o módulo de Tratamento poder usar
  exports: [MedicamentoService],
})
export class MedicamentoModule {}
 
