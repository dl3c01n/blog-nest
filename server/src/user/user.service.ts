import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';
import { User, UserDocument } from './schemas/user-schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private readonly model: Model<UserDocument>) {}

    async findAll(): Promise<User[]> {
        return await this.model.find().exec();
      }
    
      async findOne(id: string): Promise<User> {
        return await this.model.findById(id).exec();
      }
    
      async create(userDto: UserDto): Promise<User> {
        return await new this.model({
          ...userDto,
          createdAt: new Date(),
        }).save();
      }
    
      async update(id: string, userDto: UserDto): Promise<User> {
        return await this.model.findByIdAndUpdate(id, userDto).exec();
      }
    
      async delete(id: string): Promise<User> {
        return await this.model.findByIdAndDelete(id).exec();
      }
}
