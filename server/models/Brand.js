import { Sequelize } from "sequelize"
import db from "../config/db.config.js"

export default db.sequelize.define(
    'brand',
    {
        id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },        
        name: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
)