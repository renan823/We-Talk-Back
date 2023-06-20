import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({timestamps: false, tableName: "message"})

export class Message extends Model{
    @Column({type: DataType.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true})
    id!: -1;

    @Column({type: DataType.STRING, allowNull: false})
    text!: string;

    @Column({type: DataType.STRING, allowNull: false})
    status!: string;

    @Column({type: DataType.DATE, allowNull: false})
    date!: string;


}