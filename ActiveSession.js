import { Sequelize } from "sequelize"
import User from "./User"
import db from "../config/db.config.js"


export default db.sequelize.define(
    'active_session',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        device: {
            type: Sequelize.STRING,
            allowNull: false
        },
        ip_address: {
            type: Sequelize.STRING,
            allowNull: false
        },
        location: {
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

         // TODO: Add the following fields in the database
        // last_online: {
        //     type: Sequelize.DATE,
        //     allowNull: false,
        //     defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        // }
    }
)