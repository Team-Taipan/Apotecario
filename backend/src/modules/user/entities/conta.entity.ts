import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'Conta' })
export class Conta {

  @PrimaryKey({ fieldName: 'cot_codigo' })
  id!: number;

  @Property({ fieldName: 'cot_email', unique: true })
  email!: string;

  @Property({ fieldName: 'cot_senha', hidden: true }) 
  // hidden para não vazar em selects simples
  senha!: string;

  @Property({ fieldName: 'cot_ultimoLogin', nullable: true })
  ultimoLogin?: Date;
  
}