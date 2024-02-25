// import {
//   PrimaryGeneratedColumn,
//   Column,
//   Entity,
//   CreateDateColumn,
//   UpdateDateColumn,
//   OneToOne,
//   JoinColumn,
// } from 'typeorm';

// import { Person } from './person.entity';

// @Entity()
// export class Customer {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ nullable: true })
//   readonly max_credit: number;

//   @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
//   createdAt: Date;

//   @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
//   updateAt: Date;

//   @OneToOne(() => Person, { nullable: false })
//   @JoinColumn()
//   person: Person;
// }
