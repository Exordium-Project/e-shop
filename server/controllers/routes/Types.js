const express = require("express")
const types = express.Router()
const cors = require('cors')

const Type = require("../../models/Type")
types.use(cors())

types.post("/addType", (req, res) => {
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
            res.json({error: "Такъв тип съществува"})
        }
    })
    .catch(err => {
        res.send("error: " + err)
    })
})

types.get("/getAllTypes", (req, res) => {
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

module.exports = types