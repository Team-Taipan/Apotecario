import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
    @ApiProperty({ example: 'usuario@fatec.sp.gov.br', description: 'E-mail cadastrado' })
    @IsNotEmpty({ message: 'O e-mail é obrigatório' })
    @IsEmail({}, { message: 'Formato de e-mail inválido' })
    email!: string;

    @ApiProperty({ example: 'Senha123', description: 'Senha do usuário' })
    @IsNotEmpty({ message: 'A senha é obrigatória' })
    @IsString()
    senha!: string;
}