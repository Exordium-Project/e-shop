const express = require("express")
const brands = express.Router()
const cors = require('cors')
const brandService = reqiure('../../services/BrandService')

const Brand = require("../../models/Brand")
brands.use(cors())

brands.post("/addBrand", async (req, res) => {
    const brandData = {
        name: req.body.name
    }

    if(await brandService.createBrand(brandData))
        res.send(true)
})

brands.get("/getAllBrands", async (req, res) => {
    const brands = await brandService.getAllBrands()
    
    res.send(brands)
})

module.exports = brands