import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag, TagDocument } from './schemas/tag-schema';

@Injectable()
export class TagService {
    constructor(@InjectModel(Tag.name) private readonly model: Model<TagDocument>) {}

    async findAll(): Promise<Tag[]> {
        return await this.model.find().exec();
      }
    
      async findOne(id: string): Promise<Tag> {
        return await this.model.findById(id).exec();
      }
    
      async create(createTagDto: CreateTagDto): Promise<Tag> {
        return await new this.model({
          ...createTagDto,
          createdAt: new Date(),
        }).save();
      }
    
      async update(id: string, updateTagDto: UpdateTagDto): Promise<Tag> {
        return await this.model.findByIdAndUpdate(id, updateTagDto).exec();
      }
    
      async delete(id: string): Promise<Tag> {
        return await this.model.findByIdAndDelete(id).exec();
      }
}
