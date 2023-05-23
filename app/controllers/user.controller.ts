import { RequestHandler } from "express";
import { User } from '../models/user.model';

export const createUser: RequestHandler = async (req, res, next) => {
    await User.create({name: "Joãozinho", password: "1234", biography: "Sei lá"});
    res.send('ok');
}
