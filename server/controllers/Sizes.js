import express from 'express';
import Error from '../error/Error.js';
import SizeService from '../services/SizeService.js';

const sizesController = express.Router()

sizesController.post("/", async (req, res) => {
    const imageData = {
        size: req.body.size,
        quantity: req.body.quantity,
        product_id: req.body.product_id,
    }

    const createdSize = await SizeService.createSize(imageData);
    res.send(createdSize);
})

sizesController.get(`/size-info/:id`, async (req, res) => {
    const sizes = await SizeService.getAllSizesForProduct(req.params['id'])
    res.send(sizes)
})

sizesController.delete("/", async (req, res) => {
    const projectId = req.body.id;

    const result = await SizeService.deleteSize(projectId);

    if(result instanceof Error){
        res.status(result.statusCode);
        return res;
    }
    res.send(true)
})

export default sizesController