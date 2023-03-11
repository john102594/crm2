import {
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { InventoryTransaction } from './inventory-transactions.entity';

import { SaleOrderDetail } from './sale-order-detail.entity';

@Entity()
export class SaleOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(
    () => SaleOrderDetail,
    (saleOrderDetail) => saleOrderDetail.saleOrder,
  )
  saleOrderDetail: SaleOrderDetail[];

  @OneToMany(
    () => InventoryTransaction,
    (inventoryTransactions) => inventoryTransactions.saleOrder,
  )
  inventoryTransactions: InventoryTransaction[];

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updateAt: Date;
}
