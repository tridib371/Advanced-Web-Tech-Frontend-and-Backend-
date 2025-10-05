
import { Injectable } from '@nestjs/common';
import { CustomerDto } from './dto/customer.dto';

@Injectable()
export class CustomerService {
  create(customerDto: CustomerDto, document: Express.Multer.File) {
    return {
      message: 'Customer created successfully.',
      data: customerDto,
      uploadedFile: document.filename,
};
}
}