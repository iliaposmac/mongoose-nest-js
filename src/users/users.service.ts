import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { CreateUserDto } from './dto/user.dto';
import { Model } from 'mongoose'
import { User } from './interfaces/user.interace'


@Injectable()
export class UsersService {
    constructor(@InjectModel('Users') private readonly usersModel: Model<User>){}

    async createUser(user: CreateUserDto): Promise<User>{
        const newUser = new this.usersModel(user)
        return new Promise((resolve)=>{
            resolve(newUser.save())
        })
    }

    async findAllUsers(): Promise<any>{
        return new Promise((resolve)=>{
            resolve(this.usersModel.find())
        })
    }

    async findUserByID(id: string): Promise<any>{
        return new Promise((resolve)=>{
            resolve(this.usersModel.findById(id))
        })
    }

    async deleteUser(id: string): Promise<any>{
        return new Promise((resolve)=>{
            resolve(this.usersModel.findByIdAndRemove(id))
        })
    }
}
