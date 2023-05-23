import express from 'express';
import connection from './app/config/db.config';

//express config
const app = express();
app.use((
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    res.status(500).json({message: err.message});
});

//.env configs
const dotenv = require('dotenv');
dotenv.config();

//DB connection
connection.sync().then(() => {
    console.log("DB connected");
}).catch((err) => {
    console.error(err);
})



