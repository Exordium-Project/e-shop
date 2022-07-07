import express from 'express'
import BrandService from '../services/BrandService.js';
import Error from '../error/Error.js';

const brandsCotnroller = express.Router();

brandsCotnroller.post("/", async (req, res) => {
    const brandData = {
        name: req.body.name
    }

    const createdBrand = await BrandService.createBrand(brandData).catch(error => {
        console.log(error);
        return new Error(500, error.message);
    });

    if (createdBrand instanceof Error) {
        res.status(createdBrand.statusCode);
    }

    res.send(createdBrand);

})

brandsCotnroller.get("/", async (req, res) => {
    const brands = await BrandService.getAllBrands();


    if (brands instanceof Error) {
        res.status(brands.statusCode);
    }

    res.send(brands);
})

export default brandsCotnroller;