
    import {
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
            
        },
        user_id: {

        }
    }
)
/*create table if not exists review(
    id int not null auto_increment primary key,
    description varchar(300) not null,
    likes int default 0,
    product_id int not null,
    user_id int not null,
    constraint fk_reviews_products
    foreign key (product_id)
    references products(id),
    constraint fk_review_users
    foreign key (user_id)
    references users(id)
    );*/