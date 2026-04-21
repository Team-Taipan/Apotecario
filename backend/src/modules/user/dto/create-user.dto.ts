import { IsEmail, IsNotEmpty, MinLength, IsString, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'; // O ApiProperty é um decorador do NestJS que ajuda a documentar as propriedades das DTOs para o Swagger, permitindo que a documentação seja gerada automaticamente com exemplos e descrições.

export class CriarContaDto {
    @ApiProperty({ example: 'usuario@fatec.sp.gov.br', description: 'E-mail do usuário' })
    @IsNotEmpty({ message: 'O e-mail é obrigatório' })
    @IsEmail({}, { message: 'O e-mail informado é inválido' })
    email!: string; // O '!' indica que o campo é obrigatório, mas a validação não é feita pelo TypeScript, e sim pelo class-validator

    @ApiProperty({ example: 'Senha123', description: 'Senha de acesso' })
    @IsNotEmpty({ message: 'A senha é obrigatória' })
    @MinLength(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
    password!: string;

    @IsNotEmpty({ message: 'A confirmação de senha é obrigatória' })
    passwordConfirm!: string;
}