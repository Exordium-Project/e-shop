import {
    Sequelize
} from "sequelize"
import db from "../config/db.config.js"
import Address from "./Address.js"
import User from "./User.js"

export default db.sequelize.define(
    'order', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        number: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.DECIMAL,
            allowNull: false
        },
        notes: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        status:{
            type: Sequelize.STRING,
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
        address_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Address,
                key: "id"
            }
        },
    }
)