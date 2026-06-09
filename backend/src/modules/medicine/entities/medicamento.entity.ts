import { Entity, PrimaryKey, Property, Enum, ManyToOne, ManyToMany, Collection } from '@mikro-orm/core';
import { Perfil } from '../../user/entities/perfil.entity';
import { Forma } from './forma.entity';
import { PrincipioAtivo } from './principio.entity';
import { Dosagem } from './dosagem.entity';

export enum MedicamentoOrigem {
  USUARIO = 'USUARIO',
  ANVISA = 'ANVISA',
}

@Entity({ tableName: 'Medicamento' })
export class Medicamento {

  @PrimaryKey({ fieldName: 'med_codigo', autoincrement: true })
  id!: number;

  @Property({ fieldName: 'med_nome', length: 100 })
  nome!: string;

  @Enum({ items: () => MedicamentoOrigem, fieldName: 'med_origem' })
  origem!: MedicamentoOrigem;

  @Property({ fieldName: 'med_fotoURL', length: 255, nullable: true })
  fotoURL?: string;

  // Perfil que criou — só preenchido quando med_origem = 'USUARIO'
  @ManyToOne(() => Perfil, { nullable: true, fieldName: 'per_criador' })
  perCriador?: Perfil;

  // Relações exclusivas de medicamentos ANVISA (populadas via ETL)
  @ManyToMany(() => Forma, 'medicamentos', { owner: true, pivotTable: 'FormaMedicamento', joinColumn: 'med_codigo', inverseJoinColumn: 'for_codigo' })
  formas = new Collection<Forma>(this);

  @ManyToMany(() => PrincipioAtivo, 'medicamentos', { owner: true, pivotTable: 'MedicamentoPrincipio', joinColumn: 'med_codigo', inverseJoinColumn: 'pri_codigo' })
  principios = new Collection<PrincipioAtivo>(this);

  @ManyToMany(() => Dosagem, 'medicamentos', { owner: true, pivotTable: 'MedicamentoDosagem', joinColumn: 'med_codigo', inverseJoinColumn: 'dos_codigo' })
  dosagens = new Collection<Dosagem>(this);

}