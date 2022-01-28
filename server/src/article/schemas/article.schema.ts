import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'

export type ArticleDocument = Article & Document

@Schema()
export class Article {
    @Prop({required: true})
    title: string;

    @Prop({required: true})
    slug: string;
    
    @Prop({required: true})
    description: string;

    @Prop({required: true})
    createdAt: Date;

    @Prop({required: true})
    content: string;

    @Prop({required: true})
    picture: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article)