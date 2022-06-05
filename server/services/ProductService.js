import Product from '../models/Product.js';
import Error from '../error/Error.js';

export default class ProductService {

    static async createProduct(productData) {
        const createdProduct = await Product.create(productData).catch(error => {
            console.log(error);
            return new Error(500, error.message);
        });

        return createdProduct;

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