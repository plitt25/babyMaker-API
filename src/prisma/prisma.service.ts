import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateProductDto } from 'src/products/dto/create-product.dto';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
  }
  async onModuleDestroy() {
    await this.$disconnect();
  }
  async create(createDto: CreateProductDto): Promise<any> {
    return this.product.create({
      data: createDto,
    });
  }
}
