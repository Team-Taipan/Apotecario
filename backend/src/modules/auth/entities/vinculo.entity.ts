import { Entity, ManyToOne, Property, Enum } from '@mikro-orm/core';
import { Conta } from './conta.entity';
import { Perfil } from './perfil.entity';

@Entity({ tableName: 'Vinculo' })
export class Vinculo {
  // O 'primary: true' em ambos já define a chave composta
  @ManyToOne({ entity: () => Conta, primary: true, fieldName: 'cot_codigo' })
  conta!: Conta;

  @ManyToOne({ entity: () => Perfil, primary: true, fieldName: 'per_codigo' })
  perfil!: Perfil;

  @Property({ fieldName: 'vin_dataInicio' })
  dataInicio!: Date;

  @Enum({ fieldName: 'vin_papel', items: ['Admin', 'Cuidador', 'Convidado'] })
  papel!: string;
}