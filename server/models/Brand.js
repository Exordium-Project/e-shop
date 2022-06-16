import { Sequelize } from "sequelize"
import db from "../config/db.config.js"

export default db.sequelize.define(
    'brand',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },        
        name: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
)