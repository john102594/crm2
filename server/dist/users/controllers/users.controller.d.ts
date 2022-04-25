import { UsersService } from '../services/users.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<import("../entities/user.entity").User[]>;
    get(id: number): Promise<import("../entities/user.entity").User>;
    create(payload: CreateUserDto): Promise<import("../entities/user.entity").User>;
    update(id: number, payload: UpdateUserDto): Promise<import("../entities/user.entity").User>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
