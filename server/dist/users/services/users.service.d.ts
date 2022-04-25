import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { CustomersService } from './customers.service';
export declare class UsersService {
    private userRepo;
    private customersService;
    constructor(userRepo: Repository<User>, customersService: CustomersService);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    create(data: CreateUserDto): Promise<User>;
    update(id: number, changes: UpdateUserDto): Promise<User>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
