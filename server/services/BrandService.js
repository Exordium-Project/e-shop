import Brand from "../models/Brand"

module.exports.createBrand = async (brandData) => {
    const brand = await Brand.findOne({
        where: {
            name: brandData.name
        }
    })

    if(brand)
        res.json({error: "Такъв бранд съществува"})

    const newBrand = await Brand.create(brandData)

    return true;
}

module.exports.getAllBrands = async() => {
    const brands = await Brand.findAll({
        attributes: ["name"]
    })

    return brands;
}