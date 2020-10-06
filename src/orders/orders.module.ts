import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersSchema } from './models/order.model';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
  imports: [MongooseModule.forFeature([{name: "Orders", schema: OrdersSchema}])],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
