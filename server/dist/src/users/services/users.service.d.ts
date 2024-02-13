import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        email: string;
        password: string;
        role: string;
        createdAt: Date;
        updateAt: Date;
        customerId: number;
    }, unknown> & {})[]>;
    findOne(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        email: string;
        password: string;
        role: string;
        createdAt: Date;
        updateAt: Date;
        customerId: number;
    }, unknown> & {}>;
    create(data: CreateUserDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        email: string;
        password: string;
        role: string;
        createdAt: Date;
        updateAt: Date;
        customerId: number;
    }, unknown> & {}>;
    update(id: number, changes: UpdateUserDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        email: string;
        password: string;
        role: string;
        createdAt: Date;
        updateAt: Date;
        customerId: number;
    }, unknown> & {}>;
    remove(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        email: string;
        password: string;
        role: string;
        createdAt: Date;
        updateAt: Date;
        customerId: number;
    }, unknown> & {}>;
}
