const express = require("express")
const types = express.Router()
const cors = require('cors')
const typeService = require("../../services/TypeService")

const Type = require("../../models/Type")
types.use(cors())

types.post("/addType", async (req, res) => {
    const typeData = {
        name: req.body.name
    }

    await typeService.createType(typeData)

    res.send(true)
})

types.get("/getAllTypes", async (req, res) => {
    const types = await typeService.getAllTypes()

    res.send(types)
})

module.exports = types