import express from 'express';
import typeService from '../services/TypeService.js';
import { checkProvidedData } from './validationData.js';
import Error from '../error/Error.js';

const typesController = express.Router();

typesController.post("/", async (req, res) => {
    const typeData = {
        name: req.body.name,
    }

    checkProvidedData(typeData);
    const createdType = await typeService.createType(typeData);

    if (createdType instanceof Error) {
        res.status(createdType.statusCode);
    }

    res.send(createdType);
})

typesController.get("/", async (req, res) => {
    const types = await typeService.getAllTypes();

    if (types instanceof Error) {
        res.status(types.statusCode);
    }

    res.send(types);
})

export default typesController