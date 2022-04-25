import { Person } from './person.entity';
import { Company } from './company.entity';
export declare class Supplier {
    id: number;
    createdAt: Date;
    updateAt: Date;
    person: Person;
    company: Company;
}
