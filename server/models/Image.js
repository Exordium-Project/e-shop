import {Sequelize} from "sequelize"
import Product from "./Product.js"
import db from "../config/db.config.js"

export default db.sequelize.define(
    'images', {
        id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
       image_url: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
       },
       productId: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Product,
                key: 'id'
            }
        }
    },
    {
        timestamps: false
    }
)