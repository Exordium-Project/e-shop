import express from "express"
import  typeService from "../services/TypeService.js"

const typesController = express.Router()

typesController.post("/", async (req, res) => {
    const typeData = {
        name: req.body.name
    }

    await typeService.createType(typeData)

    res.send(true)
})

typesController.get("/", async (req, res) => {
    const types = await typeService.getAllTypes()

    res.send(types)
})

export default typesController