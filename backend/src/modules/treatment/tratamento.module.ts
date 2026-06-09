import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { TratamentoService } from './tratamento.service';
import { TratamentoController } from './tratamento.controller';
import { Tratamento } from './entities/tratamento.entity';
import { TratamentoEstoque } from './entities/estoque.entity';
import { Frequencia } from './entities/frequencia.entity';
import { Horario } from './entities/horario.entity';
 
@Module({
  imports: [MikroOrmModule.forFeature([Tratamento, TratamentoEstoque, Frequencia, Horario])],
  controllers: [TratamentoController],
  providers: [TratamentoService],
  exports: [TratamentoService],
})
export class TratamentoModule {}
 
