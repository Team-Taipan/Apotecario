import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'Parentesco' })
export class Parentesco {
  @PrimaryKey({ fieldName: 'par_codigo' })
  id!: number;

  @Property({ fieldName: 'par_descricao' })
  description!: string;
}