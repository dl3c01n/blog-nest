import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly service: UserService) {}

    @Get()
    async index() {
      return await this.service.findAll();
    }
  
    @Get(':id')
    async find(@Param('id') id: string) {
      return await this.service.findOne(id);
    }
  
    @Post()
    async create(@Body() userDto: UserDto) {
      return await this.service.create(userDto);
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() userDto: UserDto) {
      return await this.service.update(id, userDto);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return await this.service.delete(id);
    }
}
