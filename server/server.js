import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { v4 as uuid } from 'uuid';

import { Connection } from './database/db.js';
import { DefaultData } from './default.js';
import Router from './routes/route.js';
import { connection } from 'mongoose';

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', Router);

const PORT = process.env.PORT || 8000;

//for production
const URL = process.env.MONGODB_URL || `mongodb://${USERNAME}:${PASSWORD}@ac-fh603uc-shard-00-00.psreovv.mongodb.net:27017,ac-fh603uc-shard-00-01.psreovv.mongodb.net:27017,ac-fh603uc-shard-00-02.psreovv.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-gpsif2-shard-0&authSource=admin&retryWrites=true&w=majority&appName=ecommerce-web`;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

//Connection(USERNAME, PASSWORD); for local envirnoment
Connection(URL); //for production

if (process.env.NODE_ENV === 'production') {
    //deploy client folder after deployment of backend
    app.use(express.static('/client/build'))
}

app.listen(PORT, () =>
    console.log(`Server is running successfully on PORT ${PORT}`)
);

DefaultData();

