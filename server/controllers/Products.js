import express from "express"
import productService from '../services/ProductService.js'

const productsController = express.Router()

productsController.post("/", async (req, res) => {
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

productsController.delete("/", async (req, res) => {
    const projectId = req.body.id

    await productService.deleteProduct(projectId)

    res.send(true)
})

export default productsController