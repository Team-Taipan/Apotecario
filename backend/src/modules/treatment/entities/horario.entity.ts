import { Entity, PrimaryKey, Property, ManyToOne } from '@mikro-orm/core';
import { Frequencia } from './frequencia.entity';
 
@Entity({ tableName: 'Horario' })
export class Horario {
 
  @PrimaryKey({ fieldName: 'hor_codigo' , autoincrement: true })
  id!: number;
 
  @Property({ fieldName: 'hor_hora' ,  columnType: 'time' })
  hora!: string;
 
  @ManyToOne(() => Frequencia, { fieldName: 'fre_codigo' })
  frequencia!: Frequencia;
 
}
 
