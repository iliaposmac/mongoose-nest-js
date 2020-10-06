import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from '../items/items.module';
import { UsersModule } from '../users/users.module';
import { OrdersModule } from '../orders/orders.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://root:280398ftr@NestJs.hiwhy.mongodb.net/NestJs?retryWrites=true&w=majority'), ItemsModule, UsersModule, OrdersModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
