import Brand from "../models/Brand.js"

export default class BrandService {

    static async createBrand(brandData) {
        try {
            const brand = await Brand.findOne({
                where: {
                    name: brandData.name
                }
            });

            if (brand) {
                res.json({
                    error: "Brand with this name already exists"
                })
            }

            /*const newBrand = UNUSED*/ await Brand.create(brandData);

            return true;
        } catch(err){
            console.log(err);
            return false;
        }

    }

    static async getAllBrands() {
        try {
            return await Brand.findAll({
                attributes: ["name"]
            });

        } catch(err){
            console.log(err);
            return null;
        }
    }
}