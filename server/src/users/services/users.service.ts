import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
// import { CustomersService } from './customers.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  async create(data: CreateUserDto) {
    return this.prisma.user.create({
      data,
    });
  }

  async update(id: number, changes: UpdateUserDto) {
    return this.prisma.user.update({ where: { id }, data: changes });
  }

  async remove(id: number) {
    return await this.prisma.user.delete({ where: { id } });
  }
}
