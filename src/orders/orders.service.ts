import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { CreateOrderDto } from './dto/order.dto';
import {Order} from './interfaces/order.interface'

@Injectable()
export class OrdersService {
    constructor(@InjectModel("Order") private readonly orderModel: Model<Order>){}

    async createOrders( order: CreateOrderDto ): Promise<Order>{
        const newOrder = new this.orderModel(order)
        return new Promise((resolve)=>{
            resolve(newOrder.save())
        })
    }
}
