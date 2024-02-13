import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import config from './config';

import { UsersModule } from './users/users.module';
import { InventoryModule } from './inventory/inventory.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
    }),
    PrismaModule,
    UsersModule,
    InventoryModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
