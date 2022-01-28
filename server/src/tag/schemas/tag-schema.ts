import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'

export type TagDocument = Tag & Document

@Schema()
export class Tag {
    @Prop({required: true})
    title: string;

    @Prop({required: true})
    nbArticle: number;
}
export const TagSchema = SchemaFactory.createForClass(Tag)