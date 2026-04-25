import { Entity, ManyToOne, Property, Enum } from '@mikro-orm/core';
import { Conta } from './conta.entity';
import { Perfil } from './perfil.entity';
import { Parentesco } from './parentesco.entity';

@Entity({ tableName: 'Vinculo' })
export class Vinculo {
  
  // O 'primary: true' em ambos já define a chave composta
  @ManyToOne({ entity: () => Conta, primary: true, fieldName: 'cot_codigo' })
  conta!: Conta;

  @ManyToOne({ entity: () => Perfil, primary: true, fieldName: 'per_codigo' })
  perfil!: Perfil;

  @ManyToOne({ entity: () => Parentesco, fieldName: "par_codigo" })
  parentesco!: Parentesco;

  @Property({ fieldName: 'vin_dataInicio' })
  dataInicio!: Date;

  @Property({ fieldName: 'vin_dataFim', nullable: true })
  dataFim? : Date

  @Enum({ fieldName: 'vin_papel', items: ['Admin', 'Cuidador', 'Convidado'] })
  papel!: string;

}

// Sobre ManyToOne: segunda a documentação do mikroORM, o ManyToOne é quando uma instância da entidade
// atual (nesse caso, Vinculo) refere-se a uma instância da classe referencia(Conta e Perfil). Então esse é um registro que pertence a uma Conta e a um Perfil
// Então -> Uma conta pode ter varios vinculos, e um Perfil pode ter vários vinculos (perfil compartilhado)
// Esta é a entidade associativa que centraliza as regras de acesso, papéis e permissões.
// Ref: https://mikro-orm.io/docs/relationships