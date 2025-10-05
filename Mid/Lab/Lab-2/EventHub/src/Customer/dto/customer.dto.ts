
import {
  IsNotEmpty,
  Matches,
  MinLength,
} from 'class-validator';

export class CustomerDto {
  @IsNotEmpty({ message: 'Name is required' })
  @Matches(/^[A-Za-z0-9\s]+$/, {
    message: 'Name must not contain special characters',
  }) 
  name: string;

  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  @Matches(/.*[a-z].*/, {
    message: 'Password must contain at least one lowercase letter',
  })
  password: string;

  @IsNotEmpty({ message: 'Phone number is required' })
  @Matches(/^01[0-9]{8,9}$/, {
    message: 'Invalid phone',
  })
  phoneNumber: string;

  
}