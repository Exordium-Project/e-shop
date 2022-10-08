import {
    Sequelize,
} from "sequelize"
import db from "../config/db.config.js"
import Address from "./Address.js"
import User from "./User.js"

export default db.sequelize.define(
    'order', {
        id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        number: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: Sequelize.DataTypes.DECIMAL,
            allowNull: false,
        },
        notes: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
        },
        status:{
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: User,
                key: 'id',
            },
        },
        address_id: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Address,
                key: "id",
            },
        },
    },
    {
        timestamps: true,
    },
)