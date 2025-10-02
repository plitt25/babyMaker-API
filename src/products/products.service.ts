import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-producto.dto';


@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  create(createDto: CreateProductDto) {
    return this.prisma.product.create({ data: createDto as any });
  }

  findAll() {
    return this.prisma.product.findMany();
  }
  async findByCatalog(catalogId: string) {
  return this.prisma.product.findMany({
    where: { catalogId },
  });
}
async remove(id: string) {
  try {
    return await this.prisma.product.delete({
      where: { id },
    });
  } catch (error) {
    throw new Error(`No se pudo eliminar el producto con id ${id}: ${error.message}`);
  }
}



  findOne(id: string) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  update(id: string, updateDto: UpdateProductDto) {
    return this.prisma.product.update({ where: { id }, data: updateDto as any });
  }

}
