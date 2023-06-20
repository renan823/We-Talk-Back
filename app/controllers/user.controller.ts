import * as express from 'express';
import User from '../models/user.model';
import Crypto from '../config/hash.config';

class UserController {
    public static create = (req: express.Request, res: express.Response): void => {
        let password = '1234';
        password = Crypto.hash(password);


        User.create({name: "Joana", password: password, biography: "Sei lá"});
        res.json({ message: 'ok' });
        return;
    }

    public static login = (req: express.Request, res: express.Response, next: express.NextFunction): void => {
        
    }
}

export default UserController;
