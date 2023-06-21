import express from 'express';
import connection from './app/config/db.config';
import UserRoutes from './app/routes/user.routes';
import populate from './app/seed/populate';


//express config
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

//.env configs
const dotenv = require('dotenv');
dotenv.config();

//DB connection
connection.sync().then(() => {
    console.log("DB connected");

    //Isso é um teste!!!
    populate();
    
}).catch((err) => {
    console.error(err);
})


//routes config
app.use('/user', UserRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`listening on http://locoalhost:${PORT}/`);
});

