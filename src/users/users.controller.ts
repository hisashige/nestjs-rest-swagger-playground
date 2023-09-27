import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import {
  ApiTags,
  ApiProduces,
  ApiOperation,
  ApiParam,
  ApiResponse,
} from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
@ApiTags('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: '単体登録API' })
  @ApiResponse({
    status: 201,
    description: '登録したユーザー設定を返却',
    type: User,
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: '全体取得API' })
  @ApiResponse({
    status: 200,
    description: '登録済ユーザー設定を複数返却',
    type: [User],
  })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':uid')
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: '単体取得API' })
  @ApiParam({
    name: 'uid',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: '指定されたIDのユーザー設定を返却',
    type: User,
  })
  findOne(@Param('uid') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':uid')
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: '単体更新API' })
  @ApiParam({
    name: 'uid',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: '更新後のユーザー設定を返却',
    type: User,
  })
  update(@Param('uid') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':uid')
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: '単体削除API' })
  @ApiParam({
    name: 'uid',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: '削除されたユーザーの設定を返却',
    type: User,
  })
  remove(@Param('uid') id: string) {
    return this.usersService.remove(+id);
  }
}
