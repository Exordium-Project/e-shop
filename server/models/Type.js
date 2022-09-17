import {Sequelize} from "sequelize"
import db from "../config/db.config.js"
import Category from "./Category.js"

export default db.sequelize.define(
    'type',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        categoryId: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Category,
                key: 'id'
            }
        }
    },
    {
        timestamps: false
    }
)