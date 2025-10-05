
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdatePhoneDto {
  @IsNotEmpty()
  @IsNumber()
  phone:number;
}