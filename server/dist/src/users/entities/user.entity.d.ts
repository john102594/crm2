import { Customer } from './customer.entity';
export declare class User {
    id: number;
    email: string;
    password: string;
    role: string;
    createdAt: Date;
    updateAt: Date;
    customer: Customer;
}
