import { Table, Column, Model, HasMany, DataType } from 'sequelize-typescript';

@Table({timestamps: false, tableName: "user"})

export class User extends Model{
    @Column({type: DataType.INTEGER, allowNull: false, primaryKey: true})
    id!: -1

    @Column({type: DataType.STRING, allowNull: false})
    name!: string

    @Column({type: DataType.STRING, allowNull: false})
    password!: string

    @Column({type: DataType.STRING, allowNull: false})
    biography!: string
}
