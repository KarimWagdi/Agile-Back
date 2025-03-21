import { Injectable, UnauthorizedException,InternalServerErrorException,NotFoundException,} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere } from 'typeorm';
import { UserAttach } from './entities/user-attach.entity';
import { CreateUserAttachDto } from './dto/create-user-attach.dto';
import { UpdateUserAttachDto } from './dto/update-user-attach.dto';

@Injectable()
export class UserAttachService {
  constructor(
    @InjectRepository(UserAttach)
    private readonly userAttachRepository: Repository<UserAttach>,
  ) {}

  // ✅ Create an attachment (Only User & Manager)
  // async create(createUserAttachDto: CreateUserAttachDto, user: any) {
  //   if (user.role !== 'user' && user.role !== 'manager') {
  //     throw new UnauthorizedException('Only users and managers can add attachments.');
  //   }
  
  //   try {
  //     const attachment = this.userAttachRepository.create({..createUserAttachDto});
  //     return await this.userAttachRepository.save(attachment);
  //   } catch (error) {
  //     console.error('Error adding attachment:', error);
  //     throw new InternalServerErrorException('Failed to add attachment');
  //   }
  // }

  // ✅ Get all attachments (Open to all)
  async findAll() {
    try {
      return await this.userAttachRepository.find();
    } catch (error) {
      console.error('Error fetching attachments:', error);
      throw new InternalServerErrorException('Failed to retrieve attachments');
    }
  }

  // ✅ Get one attachment by ID (Open to all)
  async findOne(id: number) {
    try {
      const attachment = await this.userAttachRepository.findOne({
        where: { id } as FindOptionsWhere<UserAttach>,
      });

      if (!attachment) {
        throw new NotFoundException(`Attachment with ID ${id} not found`);
      }

      return attachment;
    } catch (error) {
      console.error(`Error fetching attachment with ID ${id}:`, error);
      throw new InternalServerErrorException('Failed to retrieve attachment');
    }
  }

  // ✅ Update an attachment (Only User & Manager)
  async update(id: number, updateUserAttachDto: UpdateUserAttachDto, user: any) {
    if (user.role !== 'user' && user.role !== 'manager') {
      throw new UnauthorizedException('Only users and managers can update attachments.');
    }

    try {
      const attachment = await this.userAttachRepository.preload({
        attach_id: id,
        ...updateUserAttachDto,
      });

      if (!attachment) {
        throw new NotFoundException(`Attachment with ID ${id} not found`);
      }

      return await this.userAttachRepository.save(attachment);
    } catch (error) {
      console.error(`Error updating attachment with ID ${id}:`, error);
      throw new InternalServerErrorException('Failed to update attachment');
    }
  }

  // ✅ Delete an attachment (Only User & Manager)
  async delete(id: number, user: any) {
    if (user.role !== 'user' && user.role !== 'manager') {
      throw new UnauthorizedException('Only users and managers can delete attachments.');
    }

    try {
      const result = await this.userAttachRepository.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException(`Attachment with ID ${id} not found`);
      }
    } catch (error) {
      console.error(`Error deleting attachment with ID ${id}:`, error);
      throw new InternalServerErrorException('Failed to delete attachment');
    }
  }
}