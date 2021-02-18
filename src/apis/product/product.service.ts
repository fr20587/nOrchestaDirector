// NestJS Modules
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

// Mongoose Module
import { Model } from 'mongoose';
import { CreateProductDTO } from './dto/product.dto';

// Interface
import { IProduct } from './interfaces/product.interface';

@Injectable()
export class ProductService {

    constructor(
        @InjectModel('Product') private readonly productModel: Model<IProduct>
    ) {}


    // Metodos
    public async createProduct(createProducDTO: CreateProductDTO): Promise<IProduct> {
        const product = new this.productModel(createProducDTO);
        await product.save();
        return product;            
    }
    
    
    public async getProducts(): Promise<IProduct[]> {
        const products = await this.productModel.find()
        return products            
    }

    public async getProduct(productID: string): Promise<IProduct> {
        const product = await this.productModel.findById(productID)
        return product
    }

    public async updateProduct(productID: string, createProductDTO: CreateProductDTO): Promise<IProduct> {
        const updatedProduct = await this.productModel.findByIdAndUpdate(productID, createProductDTO, { new: true });
        return updatedProduct;
    }

    public async deleteProduct(productID: string): Promise<string> {
        await this.productModel.findByIdAndDelete(productID);
        return 'Producto eliminado correctamente';

    }

}
