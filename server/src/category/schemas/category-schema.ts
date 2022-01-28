import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'

export type CategoryDocument = Category & Document

@Schema()
export class Category {
    @Prop({required: true})
    title: string;

    @Prop({required: true})
    nbArticle: number;
}
export const CategorySchema = SchemaFactory.createForClass(Category)