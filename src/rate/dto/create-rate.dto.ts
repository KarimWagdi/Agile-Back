import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsDateString, IsEmail, IsEnum, IsNotEmpty, isNumber, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateRateDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({example: 5, description: "Write Your Rate" })
    rate: number;
        
    @IsNotEmpty()
    @IsDate()
    @ApiProperty({ example: "Jan", description: "Jan" })
    month: Date;

    @IsNotEmpty()
    @IsDate()
    @ApiProperty({ example: "1990", description: "1990" })
    year: Date;
        
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    user_id: number;

}
