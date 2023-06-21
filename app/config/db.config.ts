import{ Sequelize } from 'sequelize-typescript';
import User from '../models/user.model';
import Language from '../models/language.model';
import Message from '../models/message.models';
import Chat from '../models/chat.model';
import env from 'dotenv';

//dotenv config
env.config();

//Get .env data
//global.d.ts config these types
const database: string = process.env.DB_DATABASE;
const host: string = process.env.DB_HOST;
const password: string = process.env.DB_PASSWORD;
const user: string = process.env.DB_USER;

const models = [User, Language, Chat, Message];

const connection = new Sequelize({
    database: database,
    dialect: 'mysql',
    host: host,
    logging: false,
    models: models,
    password: password,
    username: user
})

//Associations
Language.belongsToMany(User, { through: 'learn' });
Language.belongsToMany(User, { through: 'speak' });

//Follow e Chat na mesma tabela
User.belongsToMany(User, { through: Chat, as: 'otherUser'});
Message.belongsToMany(Chat, { through: 'send', as: 'chatID' });

export default connection;