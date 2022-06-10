import express from 'express'
import OrderService from '../services/OrderService.js';
import Error from '../error/Error.js';
const ordersController = express.Router();

ordersController.get("/{number}", async (req, res) => {
    
    
})


export default ordersController;