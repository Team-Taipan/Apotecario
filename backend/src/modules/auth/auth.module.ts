import { Global, Module } from "@nestjs/common";
import { BcryptService } from "./hashing/bcrypt.service";
import { HashService } from "./hashing/hash.services";
import { JwtModule } from "@nestjs/jwt";
import { jwtConfig } from "./constants/constants";

@Global() // esse modulo pode ser utilizado na aplicação inteira, não sendo necessário importa-lo explicitamente
@Module({

    imports: [ 
        JwtModule.register({
            global: true,
            secret: jwtConfig.secret,
            signOptions: {
                issuer: jwtConfig.iss,
                audience: jwtConfig.aud,
                expiresIn: jwtConfig.ttl
            },
        }),
    ],

    providers: [{
        provide: HashService,
        useClass: BcryptService // implementação de HashService, permite que troquemos caso necessário
    }],

    exports: [ HashService ]
})
export class AutenticaoModulo {}

// Referência (useClass e injeção de dependencia): https://docs.nestjs.com/fundamentals/custom-providers
