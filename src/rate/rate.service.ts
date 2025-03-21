import { Injectable } from '@nestjs/common';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
import { Rate } from './entities/rate.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { identity } from 'rxjs';

@Injectable()
export class RateService {
  constructor(
      @InjectRepository(Rate)
      private readonly userRepository: Repository<Rate>,
    ){}
  async create(createRateDto: CreateRateDto) {
    try{
      const newRate = await this.userRepository.save(createRateDto)
      return newRate;
    }catch(err){
      console.log(err);
    };
  }

 async findAll() {
    try{
      return await this.userRepository.find()
    }catch(err){
      console.log(err);
    }
  }

  async findOne() {
    try{
      const newRate = await this.userRepository.findOne({where:{}})
      if (!newRate){
        console.log("Rate not found")
        return newRate;
      }

    }catch(err){
      console.log(err);
    }
  }

  async update(id: number, updateRateDto: UpdateRateDto) {
    try{
    
    const newRate = await this.userRepository.findOne({where:{id}})
    if (!newRate){
      console.log("Rate not found")
    }
    Object.assign(newRate, updateRateDto);
    return await this.userRepository.save(newRate);
  }catch(err){
      console.log(err);
    }

  }

  async remove(id: number) {
    try{
      const deleteRate = await this.userRepository.softDelete(id)
      if (deleteRate.affected === 0){
        console.log("Rate not found")
      }
      return console.log("Rate Delete successfully")
    }catch(err){
      console.log(err);
    }
  }
}
