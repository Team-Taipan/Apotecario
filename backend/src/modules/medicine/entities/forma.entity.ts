import { Entity, PrimaryKey, Property, ManyToMany, Collection } from '@mikro-orm/core';
import { Medicamento } from './medicamento.entity';
 
@Entity({ tableName: 'Forma' })
export class Forma {
 
  @PrimaryKey()
  for_codigo!: number;
 
  @Property({ length: 45, unique: true })
  for_nome!: string;
 
  @ManyToMany(() => Medicamento, (m) => m.formas)
  medicamentos = new Collection<Medicamento>(this);
 
}
 
