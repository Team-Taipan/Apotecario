import { Global, Module } from "@nestjs/common";
import { BcryptService } from "./hashing/bcrypt.service";
import { HashService } from "./hashing/hash.services";

@Global() // esse modulo pode ser utilizado na aplicação inteira, não sendo necessário importa-lo explicitamente
@Module({
    providers: [{
        provide: HashService,
        useClass: BcryptService // implementação de HashService, permite que troquemos caso necessário
    }],

    exports: [ HashService ]
})
export class AutenticaoModulo {}

// Referência (useClass e injeção de dependencia): https://docs.nestjs.com/fundamentals/custom-providers
