import {Sequelize} from "sequelize"
import dotenv from "dotenv";

dotenv.config();

const db = {}
let db_name = process.env.DB_NAME || 'crgwpuyq';
let db_host = process.env.DB_HOST || 'mouse.db.elephantsql.com';
let db_user = process.env.DB_USER || 'crgwpuyq';
let db_password = process.env.DB_PASSWORD || 'lHT_FLq7cAXsMnXWEx4B8X8-z7mBw7cA';
const sequelize = new Sequelize(db_name,db_user,db_password, {
    host: db_host,
    dialect: 'postgresql',
    operatorsAliases: 0,
    timezone: '+02:00',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db