import { Body, Controller, Get, HttpStatus, Logger, Post, Res } from '@nestjs/common';
import { CreateOrderDto } from './dto/order.dto';
import { OrdersService } from './orders.service';
import { Order } from './interfaces/order.interface'

@Controller('orders')
export class OrdersController {
    constructor(private readonly orderService: OrdersService){}
    private logger: Logger = new Logger("OrdersController")

    @Get()
    async getAllOrders(@Res() res) : Promise<Order[]>{
        this.logger.log('Was requested get')
        return res.status(HttpStatus.OK).json({
            message: "OK"
        })
    }

    @Post('create')
    async createNewOrder(@Body() CreateOrderDto: CreateOrderDto, @Res()  res){
        const newOrder = await this.orderService.createOrders(CreateOrderDto)
        if(!newOrder){
            return res.redirect('/orders', 500)
        }
        return res.status(HttpStatus.OK).json(newOrder)
    }
}
