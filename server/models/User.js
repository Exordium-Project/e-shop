import { Sequelize, DataTypes } from "sequelize"
import db from "../config/db.config.js"
import passportLocalSequelize from 'passport-local-sequelize'

const User = db.sequelize.define(
    'users', 
    {
        id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        username: {
             type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        full_name: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        profile_img: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            defaultValue: 'pr_default.png'
        },
        date_on_creating: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        date_of_last_modified: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false,
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        role: {
            type: Sequelize.DataTypes.ENUM('User', 'Admin', 'Custumer Support'),
            defaultValue: 'User'
        },
    }, {
        timestamps: false,
        freezeTableName: true
    }
    )
    
    passportLocalSequelize.attachToUser(User, {
        usernameField: 'username',
        hashField: 'password'
    })
export default User