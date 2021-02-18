// NestJS Module
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';

// DTO
import { CreateProductDTO } from './dto/product.dto';

// Service
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(
        private productService: ProductService,
    ) {

    }

    // Create Product -- Crud
    @Post('/create')
    public async createProduct(
        @Res() res, 
        @Body() createProductDTO: CreateProductDTO
    ) {
        try {
            const product = await this.productService.createProduct(createProductDTO)
            return res.status(HttpStatus.CREATED).json({
                ok: true,
                message: 'Producto creado correctamente', 
                product
            });            
        } catch (error) {
            console.log(error);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                ok: false,
                message: 'Error inesperado.' 
            });
        }
    }

    // Get Products -- cRud
    @Get('/')
    public async getProducts(@Res() res) {
        try {
            const products = await this.productService.getProducts();
            return res.status(HttpStatus.OK).json({
                ok: true,
                products
            }); 
        } catch (error) {
            console.log(error);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                ok: false,
                message: 'Error inesperado.' 
            });
        }
    }

    // Get Products -- cRud
    @Get('/:productID')
    public async getProduct(
        @Res() res,
        @Param('productID') productID,
    ) {
        try {
            const product = await this.productService.getProduct(productID);
            if(!product) {
                return res.status(HttpStatus.NOT_FOUND).json({
                ok: false,
                message: 'El producto no existe'
                })
            }
            return res.status(HttpStatus.OK).json({
                ok: true,
                product
            }); 
        } catch (error) {
            console.log(error);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                ok: false,
                message: 'Error inesperado.' 
            });
        }
    }

    // Update Product -- crUd
    @Put('/productID')
    public async updateProduct(
        @Res() res,
        @Param('productID') productID,
        @Body() createProductDTO: CreateProductDTO,
    ) {
        try {
            const updatedProduct = await this.productService.updateProduct(productID, createProductDTO);
            if(!updatedProduct) {
                return res.status(HttpStatus.NOT_FOUND).json({
                ok: false,
                message: 'El producto no existe',
                updatedProduct
                })
            }
        } catch (error) {
            console.log(error);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                ok: false,
                message: 'Error inesperado.' 
            });
        }
    }

    // Delete Product -- cruD
    @Delete('/productID')
    public async deleteProduct(
        @Res() res,
        @Param('productID') productID,
    ) {
        try {
            const deletedProduct = await this.productService.deleteProduct(productID);
            if(!deletedProduct) {
                return res.status(HttpStatus.NOT_FOUND).json({
                ok: false,
                message: 'El producto no existe'
                })
            }
        } catch (error) {
            console.log(error);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                ok: false,
                message: 'Error inesperado.' 
            });
        }
    }

}
