const express = require("express")
const brands = express.Router()
const cors = require('cors')

const Brand = require("../../models/Brand")
brands.use(cors())

brands.post("/addBrand", (req, res) => {
    const brandData = {
        name: req.body.name
    }

    Brand.findOne({
        where: {
            name: req.body.name
        }
    })
    .then(brand => {
        if(!brand) {
            Brand.create(brandData)
            .then(user => {
                res.send(true)
            })
            .catch(err => {
                res.send("error: " + err)
            })
        } else {
            res.json({error: "Такъв бранд съществува"})
        }
    })
    .catch(err => {
        res.send("error: " + err)
    })
})

brands.get("/getAllBrands", (req, res) => {
    Brand.findAll({
        attributes: ["name"]
    })
    .then(brands => {
        res.send(brands)
    })
    .catch(err => {
        res.json(err)
    })
})

module.exports = brands