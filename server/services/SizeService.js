
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
            attributes: ['id', 'size','quantity','productId'],
            where: {
                productId: productId
            },
            order: [
                ['productId','ASC'],
                ['size','ASC']
            ]
        })
        .then(size => {
            let sizeArr = [];
             size.forEach(s=> {
                sizeArr.push({[s.size]: s.quantity});
            })
            return {"sizes": sizeArr};
        })
        .catch(err => {
            return new Error(500, err.message)
        })
        return allSizesForProduct;
    }

    static async deleteSize(projectId) {
        await Size.destroy({
            attributes: ['id', 'size','quantity', 'productId'],
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