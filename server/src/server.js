import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/mongoDB.js';
import { notFound,errorHandler } from './middlewares/errorMiddleware.js';
import cookieParser from 'cookie-parser';
import userRoutes from './interfaces/routes/user/userRoutes.js'


dotenv.config();
connectDB();

 const port = process.env.PORT || 3000;

const app  = express()

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api/users',userRoutes);
// app.use('/api/admin',);

app.get('/',(req,res)=>{
    res.send("server working ")
})



app.use(notFound);
app.use(errorHandler);
app.listen(port,console.log(`server is running on port ${port}`))