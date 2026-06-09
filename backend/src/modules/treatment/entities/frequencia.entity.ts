
import { Entity, PrimaryKey, Property, Enum, OneToMany, Collection } from '@mikro-orm/core';
import { Horario } from './horario.entity';
 
export enum FrequenciaTipo {
  CUSTOM = 'Custom',
  INTERVALO = 'Intervalo',
  CICLO = 'Ciclo',
}
 
@Entity({ tableName: 'Frequencia' })
export class Frequencia {
 
  @PrimaryKey({ fieldName: 'fre_codigo', autoincrement: true })
  id!: number;
 
  @Enum({ items: () => FrequenciaTipo, fieldName: 'fre_tipo' })
  tipo!: FrequenciaTipo;
 
  // Usado quando fre_tipo = 'Ciclo'
  @Property({ fieldName: 'fre_cicloAtivo' , nullable: true })
  cicloAtivo?: number;
 
  @Property({ fieldName: 'fre_cicloRepouso' , nullable: true })
  cicloRepouso?: number;
 
  // Usado quando fre_tipo = 'Intervalo'
  @Property({ fieldName: 'fre_intervaloHoras',  nullable: true })
  intervaloHoras?: number;
 
  @OneToMany(() => Horario, (h) => h.frequencia)
  horarios = new Collection<Horario>(this);
 
}
 
