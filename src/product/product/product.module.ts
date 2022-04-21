/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { ProductEntity, ProductSchema } from "./product.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: ProductEntity.name, schema: ProductSchema}])],
    controllers: [ProductController],
    providers: [ProductService],
})

export class ProductsModule {}