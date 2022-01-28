import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import { Tag, TagSchema } from './schemas/tag-schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  providers: [TagService],
  controllers: [TagController],
  imports: [
    MongooseModule.forFeature([{ name: Tag.name, schema: TagSchema }]),
  ],
})
export class TagModule {}
