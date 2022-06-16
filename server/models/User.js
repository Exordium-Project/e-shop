import {Sequelize} from "sequelize"
import db from "../config/db.config.js"
import passportLocalSequelize from 'passport-local-sequelize'


const User = db.sequelize.define(
    'user', 
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        full_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        profile_img: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 'pr_default.png'
        },
        date_on_creating: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        date_of_last_modified: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        role: {
            type: Sequelize.ENUM('User', 'Admin', 'Custumer Support'),
            defaultValue: 'User'
        },
    }, {
        timestamps: true
    }
)

passportLocalSequelize.attachToUser(User, {
    usernameField: 'username',
    hashField: 'password'
})

export default User