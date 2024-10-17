import mongoose from "mongoose";


export const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-fh603uc-shard-00-00.psreovv.mongodb.net:27017,ac-fh603uc-shard-00-01.psreovv.mongodb.net:27017,ac-fh603uc-shard-00-02.psreovv.mongodb.net:27017/ECOMMERCE?ssl=true&replicaSet=atlas-gpsif2-shard-0&authSource=admin&retryWrites=true&w=majority&appName=ecommerce-web`;
    //const URL = `mongodb+srv://${username}:${password}@ecommerce-web.psreovv.mongodb.net/ECOMMERCE?retryWrites=true&w=majority&appName=ecommerce-web`;
    try {
       await mongoose.connect(URL);
       console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database', error.message);
    }
}