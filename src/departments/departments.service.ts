import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from './entities/department.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department)
    private readonly departmentsRepository: Repository<Department>,
  ) {}

  async create(createDepartmentDto: CreateDepartmentDto) {
    try {
      const newDepartment = await this.departmentsRepository.save({
        ...createDepartmentDto,
      });
      return newDepartment;
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      return await this.departmentsRepository.find();
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: number) {
    try {
      const department = await this.departmentsRepository.findOne({
        where: { id },
      });
      if (!department) {
        console.log('This departmen id was not found.');
      }
      return department;
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    try {
      const department = await this.departmentsRepository.findOne({
        where: { id },
      });
      if (!department) {
        console.log('This departmen id was not found.');
      }
      Object.assign(department, updateDepartmentDto);
      return await this.departmentsRepository.save(department);
    } catch (error) {
      console.log(error);
    }
  }

  async remove(id: number) {
    try {
      const department = await this.departmentsRepository.delete(id);
      if (department.affected === 0) {
        console.log('This departmen id was not found.');
      }
      return console.log('Department deleted successfully. ');
    } catch (error) {
      console.log(error);
    }
  }
}
