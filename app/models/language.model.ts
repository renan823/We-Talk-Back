import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({timestamps: false, tableName: "language"})

export default class Language extends Model{
    @Column({type: DataType.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true})
    id!: -1;

    @Column({type: DataType.STRING, allowNull: false})
    language!: string;
}


