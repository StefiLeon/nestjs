/* eslint-disable prettier/prettier */
import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
    constructor(private productService:ProductService) {}

    // getAll():ProductEntity[]{
    //     return this.productService.findAll();
    // }

    @Get()
    async getTodo(@Res() response) {
        const products = await this.productService.findAll();
        return response.status(HttpStatus.OK).json({
            products
        })
    }
}
