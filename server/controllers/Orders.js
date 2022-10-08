import express from 'express';
import OrderService from '../services/OrderService.js';
import Error from '../error/Error.js';
const ordersController = express.Router();

ordersController.get("/{number}", async (req, res) => {
    const number = req.params.number
    
    const order = await OrderService.getOrderByNumber(number)

    if(order instanceof Error){
        res.status(order.statusCode);
    }

    res.send(order)
     
})

ordersController.post("/", async (req, res) => {
    const order = req.body
    
    const createdOrder = await OrderService.createOrder(order)

    if(createdOrder instanceof Error){
        res.status(createdOrder.statusCode);
    }

    res.send(createdOrder)
     
    
})

ordersController.patch("/{number}/status", async (req, res) => {
    
    const number = req.params.number
    const { status } = req.body
    
    const updatedOrder = await OrderService.updateOrder(number,status)

    if(updatedOrder instanceof Error){
        res.status(updatedOrder.statusCode);
    }

    res.send(updatedOrder)
     
})

export default ordersController;