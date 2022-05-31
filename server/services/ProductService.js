import Product from "../models/Product.js"

export default class ProductService {

    static async createProduct(productData) {
        const product = await Product.create(productData)

        return product
    }

    static async deleteProduct(projectId) {
        await Product.destroy({
            attributes: ['id', 'name', 'color', 'price', 'quantity', 'type_id', 'date_on_creating', 'date_of_last_modified', 'brand_id'],
            where: {
                id: projectId
            }
        })

        return true
    }
}