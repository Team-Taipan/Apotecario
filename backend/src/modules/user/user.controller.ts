import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CriarContaDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'; // Importa o decorador ApiTags para organizar a documentação do Swagger por categorias

@ApiTags('Contas') // Agrupa no Swagger
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // O endpoint de registro agora espera um criarContaDto, que tem validações automáticas graças ao ValidationPipe configurado no main.ts
  @Post('registro')
  @ApiOperation({ summary: 'Cria uma nova conta de usuário' })
  @ApiResponse({ status: 201, description: 'Conta criada com sucesso.' })
  async create(@Body() criarContaDto: CriarContaDto) {
    return this.userService.create(criarContaDto);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
