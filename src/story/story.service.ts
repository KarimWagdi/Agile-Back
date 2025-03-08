import { Injectable, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Story } from './entities/story.entity';
import { CreateStoryDto } from './dto/create-story.dto';
import { UpdateStoryDto } from './dto/update-story.dto';

@Injectable()
export class StoryService {
 
  constructor(
    @InjectRepository(Story)
    private readonly storyRepository: Repository<Story>,
  ) {}

  // Create a new story
  async create(createStoryDto: CreateStoryDto): Promise<Story> {
    try {
      const story = this.storyRepository.create(createStoryDto);
      return  await this.storyRepository.save(story);
       
    } catch (error) {
      console.error('Error creating story:', error);
      throw new InternalServerErrorException('Failed to create story');
    }
  }

  // Get all stories
  async findAll() {
    try {
      return await this.storyRepository.find();
    } catch (error) {
      console.error('Error fetching stories:', error);
      throw new InternalServerErrorException('Failed to retrieve stories');
    }
  }


  async findOne(id: number) {
    try {
      const story = await this.storyRepository.findOne({ where: { id } });
      if (!story) {
        throw new NotFoundException(`Story with ID ${id} not found`);
      }
      return story;
    } catch (error) {
      console.error(`Error fetching story with ID ${id}:`, error);
      throw new InternalServerErrorException('Failed to retrieve story');
    }
  }

  
  async delete(id: number){
    try {
      const result = await this.storyRepository.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException(`Story with ID ${id} not found`);
      }
    } catch (error) {
      console.error(`Error deleting story with ID ${id}:`, error);
      throw new InternalServerErrorException('Failed to delete story');
    }
  }
}
