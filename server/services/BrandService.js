import Brand from '../models/Brand.js';
import Error from '../error/Error.js';

export default class BrandService {

    static async createBrand(brandData) {
        const brand = await Brand.findOne({
            where: {
                name: brandData.name,
            },
        }).catch(error => {
            console.log(error);
            return new Error(500, error.message);
        });

        if (brand) {
            return new Error(409, "Conflict. A brand with the given name already exists");
        }

        const newBrand = await Brand.create(brandData).catch(error => {
            console.log(error);
            return new Error(500, error.message);
        });

        return newBrand;

    }

    static async getAllBrands() {
        const allBrands = await Brand.findAll({
            attributes: ["name"],
        }).catch(error => {
            console.log(error);
            return new Error(500, error.message);
        });

        return allBrands;
    }
}