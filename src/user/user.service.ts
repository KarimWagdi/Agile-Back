import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: AuthService,
  ){}
  async create(createUserDto: CreateUserDto) {
    try{
      const hashPass = await bcrypt.hash(createUserDto.password, 10);
      const newUser = await this.userRepository.save({...createUserDto, password: hashPass });
      const access_token = await this.jwtService.generateAccessToken(newUser.id)
      
      return {newUser, access_token};
    }catch(error){
      console.log(error);
    }
  }

  async updateAccessToken(userId: number, accessToken: string){
    try{
      const user = await this.userRepository.findOne({where:{id:userId}});
      if(!user){
        console.log('User not found');
        return;
      }
      user.accessToken = accessToken;
      await this.userRepository.save(user);
      return user;
    }catch(error){
      console.log(error);
    }
  }
  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return this.userRepository.findOne({where:{id: id}});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
