import Brand from "../models/Brand.js"

export default class BrandService {

    static async createBrand(brandData) {
        const brand = await Brand.findOne({
            where: {
                name: brandData.name
            }
        })

        if (brand)
            res.json({
                error: "Brand with this name already exists"
            })

        const newBrand = await Brand.create(brandData)

        return true;
    }

    static async getAllBrands() {
        const brands = await Brand.findAll({
            attributes: ["name"]
        })

        return brands;
    }
}