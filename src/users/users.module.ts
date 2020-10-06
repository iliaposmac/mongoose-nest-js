import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSChema } from './model/user.model';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [MongooseModule.forFeature([{schema: UserSChema, name: 'Users'}])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
