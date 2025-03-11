import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import environments from 'src/config/environments';
import { ServicesTokens } from './enums/tokens.services.enum';
import { OrdersController } from './orders.controller';

@Module({
  controllers: [OrdersController],
  providers: [],
  imports: [
    ClientsModule.register([
      {
        name: ServicesTokens.ORDER_SERVICE,
        transport: Transport.TCP,
        options: {
          host: environments.ORDERS.HOST,
          port: +environments.ORDERS.PORT,
        },
      },
    ]),
  ],
})
export class OrdersModule {}
