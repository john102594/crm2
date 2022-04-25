import { CustomersService } from '../services/customers.service';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
export declare class CustomerController {
    private customersService;
    constructor(customersService: CustomersService);
    findAll(): Promise<import("../entities/customer.entity").Customer[]>;
    get(id: number): Promise<import("../entities/customer.entity").Customer>;
    create(payload: CreateCustomerDto): Promise<import("../entities/customer.entity").Customer>;
    update(id: number, payload: UpdateCustomerDto): Promise<import("../entities/customer.entity").Customer>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
