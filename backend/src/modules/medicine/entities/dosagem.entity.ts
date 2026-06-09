import { Entity, PrimaryKey, Property, ManyToMany, Collection } from '@mikro-orm/core';
import { Medicamento } from './medicamento.entity';
 
@Entity({ tableName: 'Dosagem' })
export class Dosagem {
 
  @PrimaryKey({ fieldName: 'dos_codigo', autoincrement: true })
  id!: number;
 
  @Property({ fieldName: 'dos_valor', columnType: 'decimal(6,2)' })
  valor!: number;
 
  @Property({ fieldName: 'dos_unidade', length: 10 })
  unidade!: string;
 
  @ManyToMany(() => Medicamento, (m) => m.dosagens)
  medicamentos = new Collection<Medicamento>(this);
 
}
 
