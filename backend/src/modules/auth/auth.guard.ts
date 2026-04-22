import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private readonly jwtService : JwtService) {};

    async canActivate(context: ExecutionContext): Promise<boolean> {
        
        const request = context.switchToHttp().getRequest();
        const token = this.extrairTokenDoHeader(request);

        // verificação se o tokene xiste
        if(!token) {
            throw new UnauthorizedException();
        }

        // tenta ler o token para ver se bate
        try {

            // essa funcao do jwtService, tenta abrir o token com o nosso secret, se deu certo ele vai colocar os valores no payload
            const payload =  await this.jwtService.verifyAsync(token);

            request['user'] = payload; // guarda o resultado no request['user'] transferindo os dados entre as diferentes rotas

        }
        catch {
            throw new UnauthorizedException(); 
        }

        return true; // se passou por todas as verificações retorna true para o guard
    }

    private extrairTokenDoHeader(request: Request): string | undefined {

        // separa os elementos do header, o tipo e o token
        const [tipo, token] = request.headers.authorization?.split(' ') ?? [];

        return tipo === "Bearer" ? token : undefined;
    }

}

// Guards: um Guard é um classe anotada com o decorator @Injectable() e implementando a interface CanActivate
// essa interface possui um unico metodo que é o canActivate, que deve retornar um boolean ou uma promise do tipo boolean
// a função do guard é apenas determinar se uma requisição deve ser processada 
// pelo manipulador de rota (Controller) ou não, com base em condições específicas como autenticação, 
// permissões (roles) ou lógica de negócio.
// ref (Guards): https://docs.nestjs.com/guards
// ref (jwt guard): https://docs.nestjs.com/security/authentication#jwt-token