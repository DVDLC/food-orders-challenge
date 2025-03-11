import { OrderStatus } from '@prisma/client';
import { IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';

export class Order {
  @IsUUID()
  id: string;

  @IsString()
  title: string;

  @IsUUID()
  assigned_to: string;

  @IsUUID()
  created_by: string;

  @IsEnum(OrderStatus)
  status: OrderStatus;

  @IsOptional()
  created_at?: Date;

  @IsOptional()
  updated_at?: Date;
}
