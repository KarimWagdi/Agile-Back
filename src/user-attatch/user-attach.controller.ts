import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserAttachService } from './user-attach.service';
import { CreateUserAttachDto } from './dto/create-user-attach.dto';
import { UpdateUserAttachDto } from './dto/update-user-attach.dto';

@Controller('user')
export class UserAttachController {
  constructor(private readonly userAttachService: UserAttachService) {}

  @Post()
  create(@Body() createUserDto: CreateUserAttachDto) {
    return this.userAttachService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userAttachService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userAttachService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserAttachDto) {
    return this.userAttachService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userAttachService.remove(+id);
  }
}
