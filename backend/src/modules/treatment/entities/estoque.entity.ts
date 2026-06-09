import { Entity, PrimaryKey, Property, OneToOne } from '@mikro-orm/core';
import { Tratamento } from './tratamento.entity';

@Entity({ tableName: 'TratamentoEstoque' })
export class TratamentoEstoque {

  @PrimaryKey({ fieldName: 'tae_codigo', autoincrement: true })
  id!: number;

  @Property({ fieldName: 'tae_qtdAtual' })
  qtdAtual!: number;

  @Property({ fieldName: 'tae_qtdMinimaAviso', nullable: true })
  qtdMinimaAviso?: number;

  @Property({ fieldName: 'tae_ultimaAtualizacao', nullable: true })
  ultimaAtualizacao?: Date;

  @OneToOne(() => Tratamento, { fieldName: 'tra_codigo', owner: true })
  tratamento!: Tratamento;

}