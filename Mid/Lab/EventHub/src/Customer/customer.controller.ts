
import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Get,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/customer.dto';
import { UpdatePhoneDto } from './dto/phone.dto';


@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Body() dto: CreateCustomerDto) {
    return this.customerService.create(dto);
  }

  @Patch(':id/phone')
  updatePhone(@Param('id') id: string, @Body() dto: UpdatePhoneDto) {
    return this.customerService.updatePhone(id, dto);
  }

  @Get('null-name')
  findNullFullNames() {
    return this.customerService.findNullFullNames();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerService.remove(id);
}
}
