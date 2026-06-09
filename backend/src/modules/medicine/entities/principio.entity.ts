import { Entity, PrimaryKey, Property, ManyToMany, Collection } from '@mikro-orm/core';
import { Medicamento } from './medicamento.entity';
 
@Entity({ tableName: 'PrincipioAtivo' })
export class PrincipioAtivo {
 
  @PrimaryKey()
  pri_codigo!: number;
 
  @Property({ length: 255, unique: true })
  pri_nome!: string;
 
  @ManyToMany(() => Medicamento, (m) => m.principios)
  medicamentos = new Collection<Medicamento>(this);
 
}
 
