import {
    Sequelize
} from "sequelize"
import db from "../config/db.config.js"
import Product from "./Product.js"
import User from "./User.js"

export default db.sequelize.define(
    'order_items', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        quantity: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        price: {
            type: Sequelize.DECIMAL,
            allowNull: false
        },
        order_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Product,
                key: 'id'
            }
        },
        product_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id'
            }
        }
    }
)