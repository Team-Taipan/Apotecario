
import { Entity, PrimaryKey, Property, Enum, OneToMany, Collection } from '@mikro-orm/core';
import { Horario } from './horario.entity';
 
export enum FrequenciaTipo {
  CUSTOM = 'Custom',
  INTERVALO = 'Intervalo',
  CICLO = 'Ciclo',
}
 
@Entity({ tableName: 'Frequencia' })
export class Frequencia {
 
  @PrimaryKey({ autoincrement: true })
  fre_codigo!: number;
 
  @Enum(() => FrequenciaTipo)
  fre_tipo!: FrequenciaTipo;
 
  // Usado quando fre_tipo = 'Ciclo'
  @Property({ nullable: true })
  fre_cicloAtivo?: number;
 
  @Property({ nullable: true })
  fre_cicloRepouso?: number;
 
  // Usado quando fre_tipo = 'Intervalo'
  @Property({ nullable: true })
  fre_intervaloHoras?: number;
 
  @OneToMany(() => Horario, (h) => h.frequencia)
  horarios = new Collection<Horario>(this);
 
}
 
