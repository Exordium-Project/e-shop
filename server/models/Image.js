import {Sequelize} from "sequelize"
import Order from "./Order.js"
import Product from "./Product.js"
import User from "./User.js"
import db from "../config/db.config.js"

export default db.sequelize.define(
    'images', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
       reference_img: {
            type: Sequelize.STRING,
            allowNull: false
       },
        product_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Product,
                key: 'id'
            }
        }
    }
)