import { UsersService } from '../services/users.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<(import("@prisma/client/runtime").GetResult<{
        id: number;
        email: string;
        password: string;
        role: string;
        createdAt: Date;
        updateAt: Date;
        customerId: number;
    }, unknown> & {})[]>;
    get(id: number): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        email: string;
        password: string;
        role: string;
        createdAt: Date;
        updateAt: Date;
        customerId: number;
    }, unknown> & {}>;
    create(payload: CreateUserDto): Promise<import("@prisma/client/runtime").GetResult<{
        id: number;
        email: string;
        password: string;
        role: string;
        createdAt: Date;
        updateAt: Date;
        customerId: number;
    }, unknown> & {}>;
    update(id: number, payload: UpdateUserDto): Promise<import("@prisma/client/runtime").GetResult<{
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
