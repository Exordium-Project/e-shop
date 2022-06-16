import { Sequelize }  from "sequelize"
import db from "../config/db.config.js"
import Brand from "./Brand.js"
import Type from "./Type.js"

export default db.sequelize.define(
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
        quantity: {
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
        }

        // TODO: Add the following fields in the database
        // date_on_creating: {
        //     type: Sequelize.DATE,
        //     allowNull: false,
        //     defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        // },
        // date_of_last_modified: {
        //     type: Sequelize.DATE,
        //     allowNull: false,
        //     defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        // }
    },
    {
        timestamps: false
    }
)