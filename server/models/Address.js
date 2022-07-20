import { Sequelize } from "sequelize"
import User from './User.js'
import db from "../config/db.config.js"

export default db.sequelize.define(
    'address',
    {
        id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },        
        full_name: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        street: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        postcode: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        user_id:{
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id'
            }
        }
    }
)