import Product from '../models/Product.js';
import Size from '../models/Size.js';
import ImageProduct from '../models/Image.js';
import Error from '../error/Error.js';
import { Sequelize } from "sequelize"
import Type from '../models/Type.js';
import Category from '../models/Category.js';

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
        Size.belongsTo(Product);
        Product.hasMany(Size);
        ImageProduct.belongsTo(Product);
        Product.hasMany(ImageProduct);
        Product.belongsTo(Type);
        Product.belongsTo(Category);
        const allProducts = await Product.findAll({
            attributes: ['id', 'name', 'color', 'price', 'quantity',
                'date_added', 'is_special', 'image_url',
                'small_description', 'brand_id', 'typeId', 'categoryId'],
            include: [{
                model: Size,
                attributes: ['size', 'quantity'],
                required: false
            },
            {
                model: ImageProduct,
                attributes: ['image_url'],
                required: false
            },
            {
                model: Type,
                attributes: ['name'],
                required: false
            },
            {
                model: Category,
                attributes: ['name'],
                required: false
            }
            ]
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
                'date_added', 'is_special',
                'small_description', 'image_url', 'brand_id', 'typeId', 'categoryId'],
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
    static async getSpecialProducts() {
        Product.belongsTo(Type);
        const allProducts = await Product.findAll({
            attributes: ['id', 'name', 'color', 'price', 'quantity',
                'date_added', 'is_special',
                'small_description', 'image_url', 'brand_id', 'typeId', 'categoryId'],
            where: {
                is_special: true
            },
            include: [
                {
                    model: Type,
                    attributes: ['name'],
                    required: false
                }
            ]
        }).catch(err => {
            return new Error(500, err.message)
        })
        return allProducts;
    }

    static async getProduct(productId) {
        Product.hasMany(Size);
        Product.hasMany(ImageProduct);
        Product.belongsTo(Type);
        Product.belongsTo(Category);

        const product = await Product.findOne({
            attributes: ['id', 'name', 'color', 'price',
                'quantity', 'small_description', 'image_url',
                'date_added', 'is_special', 'brand_id', 'typeId', 'categoryId'],
            where: {
                id: productId
            },
            include: [{
                model: Size,
                attributes: ['size', 'quantity'],
                where: {
                    productId: productId,
                },
                required: false
            },
            {
                model: ImageProduct,
                attributes: ['image_url'],
                where: {
                    productId: productId,
                },
                required: false
            },
            {
                model: Type,
                attributes: ['name'],
                required: false
            },
            {
                model: Category,
                attributes: ['name'],
                required: false
            }
            ],

        })
            .catch(error => {
                console.error(error);
                return new Error(404, "Product not found!")
            })
        return product;
    }
    static async getProductsByCategory(category_id) {
        Product.belongsTo(Type);
        Product.belongsTo(Category);
        Size.belongsTo(Product);
        Product.hasMany(Size);
        const allProducts = await Product.findAll({
            attributes: ['id', 'name', 'color', 'price', 'quantity',
                'date_added', 'is_special', 'image_url',
                'small_description', 'brand_id'],
            where: {
                categoryId: category_id
            },
            include: [
                {
                    model: Size,
                    attributes: ['size', 'quantity'],
                    required: false
                },
                {
                    model: Type,
                    attributes: ['name'],
                    required: false
                },
                {
                    model: Category,
                    attributes: ['name'],
                    required: false
                }
            ],
        })
            .catch(err => {
                console.error(err);
                return new Error(500, err.message)
            })
        return allProducts;
    }

    static async deleteProduct(projectId) {
        await Product.destroy({
            attributes: ['id', 'name', 'color', 'price', 'quantity', 'image_url',
                'date_added', 'is_special', 'small_description', 'typeId', 'categoryId', 'brand_id'],
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