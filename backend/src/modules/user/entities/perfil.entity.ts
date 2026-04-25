import { Entity, PrimaryKey, Property, Enum, OneToMany, Collection } from '@mikro-orm/core';
import { Vinculo } from './vinculo.entity';

@Entity({ tableName: 'Perfil' })
export class Perfil {
  
  @PrimaryKey({ fieldName: 'per_codigo' })
  id!: number;

  @Property({ fieldName: 'per_nome' })
  nome!: string;

  @Property({ fieldName: 'per_avatar' })
  avatar!: string;

  @Enum({ fieldName: 'per_tipo', items: ['Titular', 'Dependente'] })
  tipo!: string;

  @OneToMany(() => Vinculo, vinculo => vinculo.perfil)
  vinculoPerfis = new Collection<Vinculo>(this);
}