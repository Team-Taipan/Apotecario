import { Entity, PrimaryKey, Property, ManyToOne } from '@mikro-orm/core';
import { Perfil } from '../../user/entities/perfil.entity';
import { Medicamento } from '../../medicine/entities/medicamento.entity';
import { Frequencia } from './frequencia.entity';
 
@Entity({ tableName: 'Tratamento' })
export class Tratamento {
 
  @PrimaryKey({ fieldName: 'tra_codigo' , autoincrement: true })
  id!: number;
 
  @Property({ fieldName: 'tra_inicioTratamento' })
  inicioTratamento!: Date;
 
  @Property({ fieldName: 'tra_fimTratamento', nullable: true })
  fimTratamento?: Date;
 
  @Property({ fieldName: 'tra_qtdPorDose' })
  qtdPorDose!: number;
 
  @ManyToOne(() => Frequencia, { fieldName: 'fre_codigo' })
  frequencia!: Frequencia;
 
  @ManyToOne(() => Medicamento, { fieldName: 'med_codigo' })
  medicamento!: Medicamento;
 
  @ManyToOne(() => Perfil, { fieldName: 'per_codigo' })
  perfil!: Perfil;
 
}
 
