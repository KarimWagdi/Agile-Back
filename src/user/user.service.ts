import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { AuthService } from 'src/auth/auth.service';
import { LoginDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';

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
      return newUser
    }catch(error){
      return error
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

  async logIn(loginDto: LoginDto){
    try{
      const user = await this.userRepository.findOne({where:{email:loginDto.email}})
      if(!user){
        return "email not found"
      }
      const correctPass = await bcrypt.compare(loginDto.password,user.password);
      if(!correctPass){
        return "wrong password"
      }
      const accessToken = await this.jwtService.generateAccessToken({id: user.id})
      return {accessToken, user}
    }catch(err){
      return err 
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
