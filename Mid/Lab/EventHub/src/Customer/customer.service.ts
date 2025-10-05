
import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, IsNull } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { CreateCustomerDto } from './dto/customer.dto';
import { UpdatePhoneDto } from './dto/phone.dto';


@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepo: Repository<Customer>,
  ) {}

  async create(dto: CreateCustomerDto): Promise<Customer> {
    const customer = this.customerRepo.create(dto);
    return this.customerRepo.save(customer);
  }

  async updatePhone(id: string, dto: UpdatePhoneDto): Promise<Customer> {
    const customer = await this.customerRepo.findOneBy({ id });
    if (!customer) {
      throw new NotFoundException('Customer not found');
    }
    customer.phone = dto.phone;
    return this.customerRepo.save(customer);
  }

  async findNullFullNames(): Promise<Customer[]> {
    return this.customerRepo.find({
      where: { fullName: IsNull() },
    });
  }

  async remove(id: string): Promise<void> {
    const result = await this.customerRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Customer not found');
}
}
}
