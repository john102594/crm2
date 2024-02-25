import { CustomersService } from '../services/customers.service';
import { CreateCustomerDto, UpdateCustomerDto } from '../dtos/customer.dto';
export declare class CustomerController {
    private customersService;
    constructor(customersService: CustomersService);
    findAll(): Promise<void>;
    get(id: number): Promise<void>;
    create(payload: CreateCustomerDto): Promise<void>;
    update(id: number, payload: UpdateCustomerDto): Promise<void>;
    remove(id: number): Promise<void>;
}
