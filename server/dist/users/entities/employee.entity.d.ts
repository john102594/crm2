import { Person } from './person.entity';
export declare class Employee {
    id: number;
    readonly job: string;
    readonly salary: number;
    createdAt: Date;
    updateAt: Date;
    person: Person;
}
