import Product from "../models/Product.js"

export default class ProductService {

    static async createProduct(productData) {

        try {
            return await Product.create(productData);
        } catch(err){
            console.log(err);
            return null;
        }

    }

    static async deleteProduct(projectId) {
        try {
            await Product.destroy({
                attributes: ['id', 'name', 'color', 'price', 'quantity', 'type_id', 'date_on_creating', 'date_of_last_modified', 'brand_id'],
                where: {
                    id: projectId
                }
            });

            return true;
        } catch(err){
            console.log(err);
            return false;
        }

    }
}