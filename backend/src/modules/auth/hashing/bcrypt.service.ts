import * as bcrypt from 'bcrypt';
import { HashService } from './hash.services';


// implementação do nosso 'contrato', foi criado um service caso queiramos trocar o metodo de hash
// cumprindo o padrão de injeção de dependencia do Nest
export class BcryptService extends HashService{

    async hash(senha : string): Promise<string> {

        const rodadasSalt = await bcrypt.genSalt(); // numero de iterações para gerar o hash
        return bcrypt.hash(senha, rodadasSalt); // gera o hash

    };

    async compararSenhaHash(senha: string, senhaHasheada: string): Promise<boolean> {

        return await bcrypt.compare(senha, senhaHasheada); // compara a senha com o hash do banco

    }

}