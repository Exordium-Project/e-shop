import { Sequelize } from "sequelize"
import User from './User.js'
import Review from "./Review.js"
import db from "../config/db.config.js"

export default db.Sequelize.define (
    'review_comment',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        description: {
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
        },
        review_id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Review,
                key: 'id'
            }
        }

    }
)