import { IsString, IsInt, IsBoolean, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsString()
  name: string;

  @Type(() => Number)
  @IsInt()
  price: number;

  @IsString()
  image: string;

  @IsString()
  catalogId: string;

  @Type(() => Number)
  @IsInt()
  porcentPromo: number;

  @IsBoolean()
  promo: boolean;
}
