import { Injectable, NotFoundException } from '@nestjs/common';


// import { Customer } from '../entities/customer.entity';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CustomersService {
  constructor(
    private prisma: PrismaService
  ) {}

  async findAll() {
    // return await this.customerRepo.find();
  }

  async findOne(id: number) {
    // const customer = await this.customerRepo.findOne({ where: { id } });
    // if (!customer) {
    //   throw new NotFoundException(`Customer #${id} not found`);
    // }
    // return customer;
  }

  async create(data: CreateCustomerDto) {
    // const newCustomer = this.customerRepo.create(data); //Parsea la data al Repo
    // return await this.customerRepo.save(newCustomer);
  }

  async update(id: number, changes: UpdateCustomerDto) {
    // const customer = await this.customerRepo.findOne({ where: { id } });
    // this.customerRepo.merge(customer, changes); //Parsea el customer a lo recibido en el changes
    // return await this.customerRepo.save(customer);
  }

  async remove(id: number) {
    // return await this.customerRepo.delete(id);
  }
}
