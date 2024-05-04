// src/user/user.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL')
    private readonly userModel: Model<User>,
  ) {}

  async findOneById(id: string): Promise<User> {
    return await this.userModel.findById(id).exec();
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userModel.findOne({ email }).exec();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async update(id: string, updateUserDto: any): Promise<User | null> {
    const updatedUser = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
    return updatedUser;
  }

  async create(user: Partial<User>): Promise<User> {
    const createdUser = new this.userModel(user);
    return await createdUser.save();
  }

  async delete(id: string): Promise<User | null> {
    const deletedUser = await this.userModel.findByIdAndDelete(id).exec();
    return deletedUser;
  }
}
