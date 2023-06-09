import { Table, Column, Model, DataType } from 'sequelize-typescript';
import Chat from './chat.model';

@Table({timestamps: false, tableName: "message"})

export default class Message extends Model{
    @Column({type: DataType.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true})
    id!: -1;

    @Column({type: DataType.STRING, allowNull: false})
    text!: string;

    @Column({type: DataType.STRING, allowNull: false})
    status!: string;

    @Column({type: DataType.DATE, allowNull: false})
    date!: Date;

    @Column({type: DataType.INTEGER, allowNull: false, primaryKey: true, references: {model: Chat, key: 'id'}})
    ChatId!: number;

    @Column({type: DataType.INTEGER, allowNull: false, primaryKey: true})
    UserId!: number;
}