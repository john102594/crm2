import { Module } from '@nestjs/common';

// import { CustomerController } from './controllers/customers.controller';
// import { CustomersService } from './services/customers.service';

import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { PrismaModule } from 'src/prisma/prisma.module';
@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
