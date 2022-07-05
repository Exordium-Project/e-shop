import { Sequelize } from "sequelize"
import User from './User.js'
import Product from './Product.js'
import db from "../config/db.config.js"


export default db.sequelize.define(
    'review',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        description: {
           type: Sequelize.STRING,
           allowNull: false
        },
        likes: {
            type: Sequelize.INTEGER,
            allowNull: false
        },      
        product_id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Product,
                key: 'id'
            }
        },
        user_id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id'
            }
        }

    }
)