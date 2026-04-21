
// "Contrato" definindo o que nosso serviço de Hash deve implementar
export abstract class HashService{

    abstract hash(senha : string): Promise<string>;

    abstract compararSenhaHash(senha: string, senhaHasheada: string): Promise<boolean>;

}