import { Sequelize } from "sequelize"
import User from './User.js'
import db from "../config/db.config.js"

export default db.sequelize.define(
    'address',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },        
        full_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        city: {
            type: Sequelize.STRING,
            allowNull: false
        },
        country: {
            type: Sequelize.STRING,
            allowNull: false
        },
        street: {
            type: Sequelize.STRING,
            allowNull: false
        },
        postcode: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false
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