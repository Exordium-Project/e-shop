import {Sequelize} from "sequelize"
import User from "./User.js"
import db from "../config/db.config.js"

export default db.sequelize.define(
    'basket', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },      
        price: {
            type: Sequelize.DECIMAL,
            allowNull: false
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id'
            }
        },
    }
)