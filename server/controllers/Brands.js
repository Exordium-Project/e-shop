import express from 'express'
import BrandService from '../services/BrandService.js';

const brandsCotnroller = express.Router()

brandsCotnroller.post("/", async (req, res) => {
    const brandData = {
        name: req.body.name
    }

    if(await BrandService.createBrand(brandData))
        res.send(true)
    
})

brandsCotnroller.get("/", async (req, res) => {
    const brands = await BrandService.getAllBrands()
    
    res.send(brands)
})

export default brandsCotnroller;