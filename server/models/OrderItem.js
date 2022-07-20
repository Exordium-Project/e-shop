import {
    Sequelize
} from "sequelize"
import db from "../config/db.config.js"
import Product from "./Product.js"
import User from "./User.js"

export default db.sequelize.define(
    'order_items', {
        id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        quantity: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: Sequelize.DataTypes.DECIMAL,
            allowNull: false
        },
        order_id: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Order,
                key: 'id'
            }
        },
        product_id: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Product,
                key: 'id'
            }
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id'
            }
        }
    }
)