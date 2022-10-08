import express from 'express';
import addressService from './AddressService.js';
import Error from '../error/Error.js';
import { checkProvidedData } from './validationData.js';

const addressController = express.Router();

addressController.post('/', async (req, res) => {
    const addressData = {
        fullname: req.body.fullname,
        city: req.body.city,
        country: req.body.country,
        street: req.body.street,
        postcode: req.body.postcode,
        phone: req.body.phone,
    }

    checkProvidedData(addressData);

    const createdAddress = await addressService.createAddress(addressData).catch(error =>{
        console.log(error);
        return new Error(500, error.message);
    });

    if(createdAddress instanceof Error){
        res.status(createdAddress.statusCode);
    }

    res.send(createdAddress);
})

addressController.get("/", async (req, res) =>{
    
})