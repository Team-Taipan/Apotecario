import { Entity, PrimaryKey, Property, ManyToOne } from '@mikro-orm/core';
import { Frequencia } from './frequencia.entity';
 
@Entity({ tableName: 'Horario' })
export class Horario {
 
  @PrimaryKey({ autoincrement: true })
  hor_codigo!: number;
 
  @Property({ columnType: 'time' })
  hor_hora!: string;
 
  @ManyToOne(() => Frequencia, { fieldName: 'fre_codigo' })
  frequencia!: Frequencia;
 
}
 
