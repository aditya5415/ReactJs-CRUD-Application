import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import route from './route/routes.js';

const app = express();



app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/users', route);


const PORT = 8000;
const URL = 'mongodb+srv://aditya5415:Jaipur320@crud.sbtrw.mongodb.net/PROJECT0?retryWrites=true&w=majority';

mongoose.connect(URL, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running successfully on Port ${PORT}`);
    })
}).catch(error => {
    console.log("Error: ", error.message);
})
