import { Entity, ManyToOne, Property, Enum } from '@mikro-orm/core';
import { Conta } from './conta.entity';
import { Perfil } from './perfil.entity';
import { Parentesco } from './parentesco.entity';

@Entity({ tableName: 'Vinculo' })
export class Vinculo {
  
  // O 'primary: true' em ambos já define a chave composta
  @ManyToOne({ entity: () => Conta, primary: true, fieldName: 'cot_codigo' })
  conta!: Conta;

  @ManyToOne({ entity: () => Perfil, primary: true, fieldName: 'per_codigo' })
  perfil!: Perfil;

  @ManyToOne({ entity: () => Parentesco, fieldName: "par_codigo" })
  parentesco!: Parentesco;

  @Property({ fieldName: 'vin_dataInicio' })
  dataInicio!: Date;

  @Property({ fieldName: 'vin_dataFim', nullable: true })
  dataFim? : Date

  @Enum({ fieldName: 'vin_papel', items: ['Admin', 'Cuidador', 'Convidado'] })
  papel!: string;

}