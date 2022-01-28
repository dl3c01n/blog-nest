import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoryDto } from './dto/category.dto';
import { Category, CategoryDocument } from './schemas/category-schema';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(Category.name) private readonly model: Model<CategoryDocument>) {}

    async findAll(): Promise<Category[]> {
        return await this.model.find().exec();
      }
    
      async findOne(id: string): Promise<Category> {
        return await this.model.findById(id).exec();
      }
    
      async create(categoryDto: CategoryDto): Promise<Category> {
        return await new this.model({
          ...categoryDto,
          createdAt: new Date(),
        }).save();
      }
    
      async update(id: string, categoryDto: CategoryDto): Promise<Category> {
        return await this.model.findByIdAndUpdate(id, categoryDto).exec();
      }
    
      async delete(id: string): Promise<Category> {
        return await this.model.findByIdAndDelete(id).exec();
      }
}
