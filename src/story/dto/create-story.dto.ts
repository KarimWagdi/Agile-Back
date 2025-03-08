import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString,isNumber } from 'class-validator';

export class CreateStoryDto {


    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: "title ex", description: "title" })
    title: string;
        

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: " user story description ", description: "description" })
    description: string;
        


    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: " user story  points  ", description: "  story_point" })
    story_point: string;
        
    

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: " 1  ", description: "  priority" })
    priority: number;
}
