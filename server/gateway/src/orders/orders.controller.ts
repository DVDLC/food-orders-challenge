import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ServicesTokens } from './enums/tokens.services.enum';

@Controller('orders')
export class OrdersController {
  constructor(
    @Inject(ServicesTokens.ORDER_SERVICE)
    private readonly orderService: ClientProxy,
  ) {}

  @Get()
  findAll() {
    return this.orderService.send({ cmd: 'find_all_orders' }, {});
  }

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return '';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return '';
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return '';
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return '';
  }
}
