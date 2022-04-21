import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product/product/product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from './product/product/product.service';
import { ProductEntity } from './product/product/product.schema';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://StefiLeon:Laion160191@ecommerce.uxagm.mongodb.net/ecommerce?retryWrites=true&w=majority',
    ),
    ProductEntity,
  ],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
