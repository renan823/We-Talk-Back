import { Table, Model } from 'sequelize-typescript';

@Table({timestamps: false, tableName: "chat"})

export default class Chat extends Model{}