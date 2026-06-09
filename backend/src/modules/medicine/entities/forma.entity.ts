import { Entity, PrimaryKey, Property, ManyToMany, Collection } from '@mikro-orm/core';
import { Medicamento } from './medicamento.entity';
 
@Entity({ tableName: 'Forma' })
export class Forma {
 
  @PrimaryKey({ fieldName: 'for_codigo', autoincrement: true })
  id!: number;
 
  @Property({ fieldName: 'for_nome', length: 45, unique: true })
  nome!: string;
 
  @ManyToMany(() => Medicamento, (m) => m.formas)
  medicamentos = new Collection<Medicamento>(this);
 
}
 
