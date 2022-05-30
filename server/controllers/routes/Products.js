const express = require("express")
const products = express.Router()
const cors = require('cors')
const productService = require('../../services/ProductService')

const Product = require("../../models/Product")
products.use(cors())

products.post("/product", async (req, res) => {
    const productData = {
        name: req.body.name,
        color: req.body.color,
        price: req.body.price,
        quantity: req.body.quantity,
        type_id: req.body.type_id,
        brand_id: req.body.brand_id
    }

    const product = await productService.createProduct(productData)

    res.send(product)
})

products.delete("/product", async (req, res) => {
    const projectId = req.body.id

    await productService.deleteProduct(projectId)

    res.send(true)
})

module.exports = products