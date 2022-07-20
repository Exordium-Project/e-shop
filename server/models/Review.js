import 
{
 Sequelize
} from "sequelize"
import db from "../config/db.config.js"
import Product from "./Product.js"
import User from "./User.js"

export default db.sequelize.define(
    'review', {
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
       description: {
         type: Sequelize.STRING,
         allowNull: false
       },
        likes: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        product_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Product,
                key: 'id'
            }
        },
         user_id: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id'
            }
        }
    }
)