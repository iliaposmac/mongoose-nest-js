import { Body, Controller, Get, HttpCode, HttpStatus, Logger, Post, Res } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}
    private logger: Logger = new Logger('UsersController')



    @Post('create')
    async addNewUser(@Res() res, @Body() CreateUserDto : CreateUserDto ){
        const newuser = await this.userService.createUser(CreateUserDto)
        this.logger.log('User was created \n' + newuser)
        return res.status(HttpStatus.OK).json(newuser)
    }

    @Get('all')
    @HttpCode(200)  
    async getUsers(@Res() res)  {
        const users = await this.userService.findAllUsers()
        this.logger.log('Requested all users list \n '+ users)
        return res.status(HttpStatus.ACCEPTED).json(users)
    }
}
