import{ Sequelize } from 'sequelize-typescript';
import { User } from '../models/user.model';

//Precisa colocar os dados no .env!!!!!
//Database connection
//const database: string = process.env.DB_NAME;
//const username: string = process.env.DB_USER;
//const password: string = process.env.DB_PASSWORD;

const connection = new Sequelize({
    database: 'wetalk',
    dialect: 'mysql',
    host: 'localhost',
    logging: false,
    models:[User],
    password: '',
    username: ''
    
})

export default connection;