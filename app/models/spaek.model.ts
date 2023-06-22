import { Table, Model } from 'sequelize-typescript';

@Table({timestamps: false, tableName: "speak"})

export default class Speak extends Model{};