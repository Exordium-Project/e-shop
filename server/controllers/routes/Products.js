const express = require("express")
const products = express.Router()
const cors = require('cors')

const Product = require("../../models/Product")
products.use(cors())

products.post("addProduct", (req, res) => {
    const productData = {
        name: req.body.name,
        color: req.body.color,
        price: req.body.price,
        quantity: req.body.quantity,
        type_id: req.body.type_id,
        brand_id: req.body.brand_id
    }

    Product.create(productData)
    .then(product => {
        res.send(product)
    })
    .catch(err => {
        res.json("error: " + err)
    })
})

products.delete("/deleteProduct", (req, res) => {
    Product.destroy({
        attributes: ['id', 'name', 'color', 'price', 'quantity', 'type_id', 'date_on_creating', 'date_of_last_modified', 'brand_id'],
        where: {
            id: req.body.id
        }
    })
    .then(product => {
        if(product){
            res.send(product)
        }
    })
    .catch(err => {
        res.json("error: " + err)
    })
})

module.exports = products