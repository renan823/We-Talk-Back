import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({timestamps: false, tableName: "user"})

export default class User extends Model{
    @Column({type: DataType.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true})
    id!: -1;

    @Column({type: DataType.STRING, allowNull: false, unique: true})
    name!: string;

    @Column({type: DataType.STRING, allowNull: false})
    password!: string;

    @Column({type: DataType.STRING, allowNull: false})
    biography!: string;
}

