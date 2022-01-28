import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentDto } from './dto/comment.dto';

@Controller('comment')
export class CommentController {
    constructor(private readonly service: CommentService) {}

    @Get()
    async index() {
      return await this.service.findAll();
    }
  
    @Get(':id')
    async find(@Param('id') id: string) {
      return await this.service.findOne(id);
    }
  
    @Post()
    async create(@Body() commentDto: CommentDto) {
      return await this.service.create(commentDto);
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() commentDto: CommentDto) {
      return await this.service.update(id, commentDto);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return await this.service.delete(id);
    }
}
