import { Entity, PrimaryKey, Property, Collection, OneToMany } from '@mikro-orm/core';
import { Vinculo } from './vinculo.entity';

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

  @OneToMany( 
    () => Vinculo, // entidade referenciada (Vinculo)
    vinculo => vinculo.conta  // para prencher essa instancia, dizemos ao mikroORM para ir na entidade vinculo e procurar pelo atributo conta que é a ligação
  )
  vinculoPerfis = new Collection<Vinculo>(this);
  
}

// Quando a entidade de relacionamento é N:N e tem seus campos próprios (como a de vincúlo), vc precisa
// fazer uma ligação bidirecional para que o mikroORM entenda que isso é uma tabela N:N ao invés da anotação @ManyToMany
// Isso é feito usando o decorator @OneToMany() que quer dizer que uma instância da classe atual (Conta)
// pode ter várias instancias da classe referenciada (no caso Vinculo).
// Ref: https://mikro-orm.io/docs/relationships