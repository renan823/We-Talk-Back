import * as express from 'express';
import User from '../models/user.model';
import Crypto from '../config/hash.config';
import JWT from '../config/jwt.config';

class UserController {
    public static create = async (req: express.Request, res: express.Response) => {
        let { name, password, biography } = req.body;

        let count = await User.count({where: {name: name}});
        if (count !== 0) {
            return res.json({ message: 'Este nome já está sendo usado. Por favor, escolha outro.' });
        }

        let user = await User.create({name: name, password: Crypto.hash(password), biography: biography });
        if (user === null) {
            return res.json({ message: 'Algo deu errado! Tente novamente.' });
        }

        //let id = user.id
        //Aqui tem que criar todas as conexões com a lingua (fala/aprende) desse usuário

        return res.json({ message: 'Usuário cadastrado. Faça login para continuar.' });
    }

    public static login = async (req: express.Request, res: express.Response) => {
        let { name, password } = req.body;

        const user = await User.findOne({where: {name: name}, attributes: ['password']});
        if (user === null) {
            return res.json({ message: 'Este usuário não existe!' });
        } 

        if (!Crypto.compare(password, user.password)) {
            return res.json({ message: 'Usuário ou senha incorretos!' });
        } 

        const token = await JWT.sign({name: name});

        return res.json({ message: 'Bem vindo!', token: token });
    }

    public static profile = async (req: express.Request, res: express.Response) => {
        res.send({message: 'Essa rota é protegida!'});
    }

    /*
    public static delete = async (req: express.Request, res: express.Response) => {
        let id = req.body.id
        let count = await User.destroy({where: {id: id}});
        
        if (count > 0) {
            return true;
        }

        return false;
    }
    */
}

export default UserController;
