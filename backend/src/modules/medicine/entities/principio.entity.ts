import { Entity, PrimaryKey, Property, ManyToMany, Collection } from '@mikro-orm/core';
import { Medicamento } from './medicamento.entity';
 
@Entity({ tableName: 'PrincipioAtivo' })
export class PrincipioAtivo {
 
  @PrimaryKey({fieldName: 'pri_codigo', autoincrement: true})
  id!: number;
 
  @Property({ fieldName: 'pri_nome', length: 255, unique: true })
  nome!: string;
 
  @ManyToMany(() => Medicamento, (m) => m.principios)
  medicamentos = new Collection<Medicamento>(this);
 
}
 
