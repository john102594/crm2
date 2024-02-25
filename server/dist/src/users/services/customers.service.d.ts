import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class CustomersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<void>;
    findOne(id: number): Promise<void>;
    create(data: CreateCustomerDto): Promise<void>;
    update(id: number, changes: UpdateCustomerDto): Promise<void>;
    remove(id: number): Promise<void>;
}
