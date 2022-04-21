/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ProductEntity, ProductDocument } from './product.schema';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(ProductEntity.name) private productModel: Model<ProductDocument>,
    ) {}
    
    async findAll(): Promise<ProductEntity[]> {
        console.log('productos')
        return this.productModel.find();
    }
}
