import { Person } from './person.entity';
export declare class Customer {
    id: number;
    readonly max_credit: number;
    createdAt: Date;
    updateAt: Date;
    person: Person;
}
