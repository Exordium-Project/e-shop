import Image from '../models/Image.js';
import Error from '../error/Error.js';

export default class ImageService {

    static async createImage(imageData) {
        const createdImage = await Image.create(imageData).catch(error => {
            console.log(error);
            return new Error(500, error.message);
        });

        return createdImage;

    }
    static async getAllImagesForProduct(productId){    
        const allImagesForProduct = await Image.findAll({
            attributes: ['id', 'image_url'],
            where: {
                id: productId
            }
        }).catch(err => {
            return new Error(500, err.message)
        })
        return allImagesForProduct;
    }

    static async deleteImage(projectId) {
        await Image.destroy({
            attributes: ['id', 'image_url', 'product_id'],
            where: {
                id: projectId
            }
        }).catch(error =>{
            console.log(error);
            return new Error(500, error.message);
        });

        return true;
    }
}