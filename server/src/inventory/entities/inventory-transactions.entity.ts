import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

import { Product } from './product.entity';
import { PurchaseOrder } from './purchase-order.entity';
import { SaleOrder } from './sale-order.entity';

@Entity()
export class InventoryTransaction {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.inventoryTransactions)
  product: Product;

  @Column({ type: 'float' })
  readonly quantity: number;

  @Column({ type: 'float', nullable: true })
  readonly unit_price: number;

  @Column({ type: 'float' })
  balance: number;

  @Column({ type: 'float' })
  unit_cost_avg: number;

  @ManyToOne(() => PurchaseOrder)
  purchaseOrder: PurchaseOrder;

  @ManyToOne(() => SaleOrder)
  saleOrder: SaleOrder;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updateAt: Date;
}
