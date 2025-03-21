import { PartialType } from '@nestjs/swagger';
import { CreateRateDto } from './create-rate.dto';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateRateDto extends PartialType(CreateRateDto) {
  @IsNotEmpty()
  @IsNumber()
  rate: number;

}
