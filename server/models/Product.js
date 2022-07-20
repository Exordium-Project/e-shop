import { Sequelize }  from "sequelize"
import db from "../config/db.config.js"
import Brand from "./Brand.js"
import Type from "./Type.js"

export default db.sequelize.define(
    'product',
    {
        id: {
            type: Sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },        
        name: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        color: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.DataTypes.DECIMAL,
            allowNull: false
        },
        quantity: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
        },
        type_id: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Type,
                key: 'id'
            }
        },
        brand_id: {
            type: Sequelize.DataTypes.INTEGER,
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