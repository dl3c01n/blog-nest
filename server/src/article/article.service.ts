import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article, ArticleDocument } from './schemas/article.schema';
@Injectable()
export class ArticleService {
    constructor(@InjectModel(Article.name) private readonly model: Model<ArticleDocument>) {}

    async findAll(): Promise<Article[]> {
        return await this.model.find().exec();
      }
    
      async findOne(id: string): Promise<Article> {
        return await this.model.findById(id).exec();
      }
    
      async create(createArticleDto: CreateArticleDto): Promise<Article> {
        return await new this.model({
          ...createArticleDto,
          createdAt: new Date(),
        }).save();
      }
    
      async update(id: string, updateArticleDto: UpdateArticleDto): Promise<Article> {
        return await this.model.findByIdAndUpdate(id, updateArticleDto).exec();
      }
    
      async delete(id: string): Promise<Article> {
        return await this.model.findByIdAndDelete(id).exec();
      }
}
