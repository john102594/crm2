import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

import { Product } from './product.entity';
import { SaleOrder } from './sale-order.entity';

@Entity()
export class SaleOrderDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'float' })
  readonly quantity: number;

  @Column({ type: 'float' })
  readonly unit_price: number;

  @ManyToOne(() => Product)
  product: Product;

  @ManyToOne(() => SaleOrder, (saleOrder) => saleOrder.saleOrderDetail)
  saleOrder: SaleOrder;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updateAt: Date;
}
