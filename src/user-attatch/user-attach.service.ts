import { Injectable } from '@nestjs/common';
import { CreateUserAttachDto } from './dto/create-user-attach.dto';
import { UpdateUserAttachDto } from './dto/update-user-attach.dto';

@Injectable()
export class UserAttachService {
  create(createUserDto: CreateUserAttachDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserAttachDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
