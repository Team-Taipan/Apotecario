import { Entity, PrimaryKey, Property, ManyToOne } from '@mikro-orm/core';
import { Perfil } from '../../user/entities/perfil.entity';
import { Medicamento } from '../../medicine/entities/medicamento.entity';
import { Frequencia } from './frequencia.entity';
 
@Entity({ tableName: 'Tratamento' })
export class Tratamento {
 
  @PrimaryKey({ autoincrement: true })
  tra_codigo!: number;
 
  @Property()
  tra_inicioTratamento!: Date;
 
  @Property({ nullable: true })
  tra_fimTratamento?: Date;
 
  @Property()
  tra_qtdPorDose!: number;
 
  @ManyToOne(() => Frequencia, { fieldName: 'fre_codigo' })
  frequencia!: Frequencia;
 
  @ManyToOne(() => Medicamento, { fieldName: 'med_codigo' })
  medicamento!: Medicamento;
 
  @ManyToOne(() => Perfil, { fieldName: 'per_codigo' })
  perfil!: Perfil;
 
}
 
