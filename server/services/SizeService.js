
import Error from '../error/Error.js';
import Size from '../models/Size.js';

export default class SizeService {

    static async createSize(sizeData) {
        const createdSize = await Size.create(sizeData).catch(error => {
            console.log(error);
            return new Error(500, error.message);
        });

        return createdSize;

    }
    static async getAllSizesForProduct(productId){    
        const allSizesForProduct = await Size.findAll({
            attributes: ['id', 'size','quantity','isMaleGender','product_id'],
            where: {
                product_id: productId
            }
        }).catch(err => {
            return new Error(500, err.message)
        })
        return allSizesForProduct;
    }

    static async deleteSize(projectId) {
        await Size.destroy({
            attributes: ['id', 'size','quantity','isMaleGender', 'product_id'],
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