import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-producto.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() createDto: CreateProductDto) {
    const newProduct = await this.productsService.create(createDto);
    return newProduct;
  }

  @Get()
  findAlle() {
    return this.productsService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateProductDto) {
    return this.productsService.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
