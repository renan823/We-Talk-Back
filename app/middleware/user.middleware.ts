import * as express from 'express';

const UserMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const body = req.body;
    let regExp: RegExp = new RegExp(/\S{4,}/);
    let status = 'OK';
    
    Object.keys(body).forEach(key => {
        let value = body[key].trim();
        if (!regExp.test(value)) {
            status = 'BAD';
        }
    })

    if (status === 'OK') {
        next();
    } else {
        res.status(401).json({ message: 'You need to fill all fields!'});
    }
}

export default UserMiddleware;