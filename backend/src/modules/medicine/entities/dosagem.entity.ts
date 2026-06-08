import { Entity, PrimaryKey, Property, ManyToMany, Collection } from '@mikro-orm/core';
import { Medicamento } from './medicamento.entity';
 
@Entity()
export class Dosagem {
 
  @PrimaryKey()
  dos_codigo!: number;
 
  @Property({ columnType: 'decimal(6,2)' })
  dos_valor!: number;
 
  @Property({ length: 10 })
  dos_unidade!: string;
 
  @ManyToMany(() => Medicamento, (m) => m.dosagens)
  medicamentos = new Collection<Medicamento>(this);
 
}
 
