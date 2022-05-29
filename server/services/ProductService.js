import Product from "../models/Product"

module.exports.createProduct = async (productData) => {
    const product = await Product.create(productData)

    return product
}

module.exports.deleteProduct = async (projectId) => {
    await Product.destroy({
        attributes: ['id', 'name', 'color', 'price', 'quantity', 'type_id', 'date_on_creating', 'date_of_last_modified', 'brand_id'],
        where: {
            id: projectId
        }
    })

    return true
}