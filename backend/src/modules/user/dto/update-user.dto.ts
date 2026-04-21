import { PartialType } from '@nestjs/mapped-types';
import { CriarContaDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CriarContaDto) {}
// O PartialType é uma função do NestJS que cria um novo tipo baseado em outro, mas com todas as propriedades opcionais. Assim, o UpdateUserDto tem as mesmas propriedades do CriarContaDto, mas nenhuma delas é obrigatória. Isso é útil para operações de atualização, onde nem todos os campos precisam ser fornecidos.
