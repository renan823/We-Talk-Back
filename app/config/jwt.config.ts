import jwt from 'jsonwebtoken';
import * as express from 'express';

type Payload = {
    name: string;
}

class JWT{
    public static verify = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const auth = req.headers.authorization;

        if (!auth || auth === null) {
            return res.status(401).json({ message: 'Nenhum token foi encontrado!' });
        }

        const token = auth.split(' ')[1];

        try {
            await jwt.verify(token, process.env.SECRET);
            next();
        } catch(err) {
            return res.status(401).json({ message: 'Token inválido!' });
        }
    }

    public static sign = async (payload: Payload) => {
        const token = jwt.sign(payload, process.env.SECRET, { expiresIn: 3600 });
        return token;
    }
}

export default JWT;