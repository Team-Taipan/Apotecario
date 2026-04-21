import { IsEmail, IsNotEmpty, MinLength, IsString, Matches } from 'class-validator';

export class CriarContaDto {
  @IsNotEmpty({ message: 'O e-mail é obrigatório' })
  @IsEmail({}, { message: 'O e-mail informado é inválido' })
  email!: string; // O '!' indica que o campo é obrigatório, mas a validação não é feita pelo TypeScript, e sim pelo class-validator

  @IsNotEmpty({ message: 'A senha é obrigatória' })
  @MinLength(8, { message: 'A senha deve ter no mínimo 8 caracteres' })
  password!: string;

  @IsNotEmpty({ message: 'A confirmação de senha é obrigatória' })
  passwordConfirm!: string;
}