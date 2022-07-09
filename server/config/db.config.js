import {Sequelize} from "sequelize"

const db = {}
let db_name = process.env.DB_NAME || 'exorduim-eshop';
let db_host = process.env.DB_HOST || '127.0.0.1';
let db_user = process.env.DB_USER || 'user';
let db_password = process.env.DB_PASSWORD || 'password';
const sequelize = new Sequelize(db_name,db_user,db_password, {
    host: db_host,
    dialect: 'mysql',
    operatorsAliases: false,
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