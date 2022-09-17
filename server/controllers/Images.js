import express from 'express';
import Error from '../error/Error.js';
import ImageService from '../services/ImageService.js';

const imagesController = express.Router()

imagesController.post("/", async (req, res) => {
    const imageData = {
        image_url: req.body.image_url,
        productId: req.body.productId
    }

    const createdImage = await ImageService.createImage(imageData);
    res.send(createdImage);
})

imagesController.get(`/image-info/:id`, async (req, res) => {
    const images = await ImageService.getAllImagesForProduct(req.params['id'])
    res.send(images)
})

imagesController.delete("/", async (req, res) => {
    const projectId = req.body.id;

    const result = await ImageService.deleteImage(projectId);

    if(result instanceof Error){
        res.status(result.statusCode);
        return res;
    }
    res.send(true)
})

export default imagesController