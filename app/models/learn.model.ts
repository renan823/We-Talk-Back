import { Table, Model } from 'sequelize-typescript';

@Table({timestamps: false, tableName: "learn"})

export default class Learn extends Model{};