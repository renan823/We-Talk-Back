import { Table, Model, DataType, Column } from 'sequelize-typescript';

@Table({timestamps: false, tableName: "chat"})

export default class Chat extends Model{
    @Column({type: DataType.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true})
    id!: -1;
};