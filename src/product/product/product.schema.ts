/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type ProductDocument = ProductEntity & Document;

@Schema()
export class ProductEntity {
    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    code: number;
    
    @Prop()
    stock: number;

    @Prop()
    thumbnail: string;

    @Prop()
    price: number;
}

export const ProductSchema = SchemaFactory.createForClass(ProductEntity);
