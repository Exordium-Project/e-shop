const Sequelize = require("sequelize")
const db = require("../config/db.config")
const Brand = require("./Brand")
const Type = require("./Type")

module.exports = db.sequelize.define(
    'product',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },        
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        color: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.DECIMAL,
            allowNull: false
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        type_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Type,
                key: 'id'
            }
        },
        brand_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Brand,
                key: 'id'
            }
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
        }
    }
)