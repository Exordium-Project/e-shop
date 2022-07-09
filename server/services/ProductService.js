import Product from '../models/Product.js';
import Error from '../error/Error.js';

export default class ProductService {

    static async createProduct(productData) {

        const product = await Product.findOne({
            where: {
                name: productData.name
            }
        });


        if (product)
            return new Error(409, "A product with the given name already exists.");

        const createdProduct = await Product.create(productData).catch(error => {
            console.log(error);
            return new Error(500, error.message);
        });

        return createdProduct;

    }
    static async getAllProducts(){
        const allProducts = await Product.findAll({
            attributes: ['id', 'name', 'color', 'price', 'quantity', 'brand_id', 'type_id']
        }).catch(err => {
            return new Error(500, err.message)
        })
        return allProducts;
    }
    static async deleteProduct(projectId) {
        await Product.destroy({
            attributes: ['id', 'name', 'color', 'price', 'quantity', 'type_id', 'date_on_creating', 'date_of_last_modified', 'brand_id'],
            where: {
                id: projectId
            }
        }).catch(error =>{
            console.log(error);
            return new Error(500, error.message);
        });

        return true;
    }
}