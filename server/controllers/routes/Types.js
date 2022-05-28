const express = require("express")
const types = express.Router()
const cors = require('cors')

const Type = require("../../models/Type")
types.use(cors())

types.post("/addType", (req, res) => {
    const typeData = {
        name: req.body.name
    }

    Type.findOne({
        where: {
            name: req.body.name
        }
    })
    .then(type => {
        if(!type) {
            Type.create(typeData)
            .then(type => {
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
    Type.findAll({
        attributes: ["name"]
    })
    .then(types => {
        res.send(types)
    })
    .catch(err => {
        res.json(err)
    })
})

module.exports = types