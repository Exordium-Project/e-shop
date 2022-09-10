import Product from '../models/Product.js';
import Error from '../error/Error.js';
import { Sequelize } from "sequelize"

export default class ProductService {

    static async createProduct(productData) {

        const product = await Product.findOne({
            where: {
                name: productData.name
            }
        });
        productData.date_added = new Date();


        if (product)
            return new Error(409, "A product with the given name already exists.");

        const createdProduct = await Product.create(productData).catch(error => {
            console.log(error);
            return new Error(500, error.message);
        });

        return createdProduct;

    }
    static async getAllProducts() {
        const allProducts = await Product.findAll({
            attributes: ['id', 'name', 'color', 'price', 'quantity',
                'date_added', 'is_special_product', 'image_url',
                'small_description', 'brand_id', 'type_id']
        }).catch(err => {
            return new Error(500, err.message)
        })
        return allProducts;
    }
    static async getTodayProducts() {
        const TODAY_START = new Date().setHours(0, 0, 0, 0);
        const NOW = new Date();
        const Op = Sequelize.Op;
        const allProducts = await Product.findAll({
            attributes: ['id', 'name', 'color', 'price', 'quantity',
            'date_added', 'is_special_product',
            'small_description', 'brand_id', 'type_id'],
            where: {
                date_added: {
                    [Op.gt]: TODAY_START,
                    [Op.lt]: NOW
                },
            }
        }).catch(err => {
            return new Error(500, err.message)
        })
        return allProducts;
    }

    static async getProduct(productId) {
        const product = await Product.findOne({
            attributes: ['id', 'name', 'color', 'price',
                'quantity', 'small_description', 'image_url',
                'date_added', 'is_special_product', 'brand_id', 'type_id'],
            where: {
                id: productId
            }
        }).catch(error => {
            return new Error(404, "Product not found!")
        })

        return product;
    }

    static async deleteProduct(projectId) {
        await Product.destroy({
            attributes: ['id', 'name', 'color', 'price', 'quantity','image_url',
                'date_added', 'is_special_product', 'small_description', 'type_id', 'brand_id'],
            where: {
                id: projectId
            }
        }).catch(error => {
            console.log(error);
            return new Error(500, error.message);
        });

        return true;
    }
}