import express from 'express';
import productService from '../services/ProductService.js';
import Error from '../error/Error.js';

const productsController = express.Router()

productsController.post("/", async (req, res) => {
    const productData = {
        name: req.body.name,
        color: req.body.color,
        price: req.body.price,
        quantity: req.body.quantity,
        image_url: req.body.image_url,
        is_special: req.body.is_special,
        gender: req.body.gender,
        small_description: req.body.small_description,
        type_id: req.body.type_id,
        brand_id: req.body.brand_id
    }
    
    const createdProduct = await productService.createProduct(productData);

    if(createdProduct instanceof Error){
        res.status(createdProduct.statusCode);
    }

    res.send(createdProduct);
})
productsController.get('/', async (req, res) => {
    const products = await productService.getAllProducts()

    if(products instanceof Error){
        res.status(products.statusCode)
    }
    
    res.send(products)
})
productsController.get('/today', async (req, res) => {
    const products = await productService.getTodayProducts()

    if(products instanceof Error){
        res.status(products.statusCode)
    }
    
    res.send(products)
})
productsController.get('/special-products', async (req, res) => {
    const products = await productService.getSpecialProducts()

    if(products instanceof Error){
        res.status(products.statusCode)
    }
    
    res.send(products)
})

productsController.get(`/product-info/:id`, async (req, res) => {
    const product = await productService.getProduct(req.params['id'])

    res.send(product)
})

productsController.delete("/", async (req, res) => {
    const projectId = req.body.id;

    const result = await productService.deleteProduct(projectId);

    if(result instanceof Error){
        res.status(result.statusCode);
        return res;
    }
    res.send(true)
})

export default productsController