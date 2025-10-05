
import { IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateCustomerDto {
  @IsOptional()
  fullName?: string;

  @IsNotEmpty()
  @IsNumber()
  phone:number;
}