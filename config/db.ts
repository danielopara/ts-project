import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config()

const sequelize = new Sequelize(
    process.env.DB_NAME as string,
    process.env.DB_USERNAME as string,
    process.env.DB_PASSWORD as string,
    {
        // host: process.env.DB_HOST,
        // port: Number(process.env.DB_PORT),
        // database: process.env.DB_NAME,
        dialect: process.env.DB_DIALECT as 'mysql',
        // dialectModule: require('mysql'),
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
    }
);
// sequelize.authenticate()
// .then(() => {
//     console.log('connected..')
// })
// .catch(err => {
//     console.log('Error'+ err)
// })


export default sequelize;