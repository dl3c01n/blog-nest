import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommentDto } from './dto/comment.dto';
import { Comment, CommentDocument } from './schemas/comment-schema';

@Injectable()
export class CommentService {
    constructor(@InjectModel(Comment.name) private readonly model: Model<CommentDocument>) {}

    async findAll(): Promise<Comment[]> {
        return await this.model.find().exec();
      }
    
      async findOne(id: string): Promise<Comment> {
        return await this.model.findById(id).exec();
      }
    
      async create(commentDto: CommentDto): Promise<Comment> {
        return await new this.model({
          ...commentDto,
          createdAt: new Date(),
        }).save();
      }
    
      async update(id: string, commentDto: CommentDto): Promise<Comment> {
        return await this.model.findByIdAndUpdate(id, commentDto).exec();
      }
    
      async delete(id: string): Promise<Comment> {
        return await this.model.findByIdAndDelete(id).exec();
      }
}
