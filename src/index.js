// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'
// import mongoose from "mongoose";
// import { DB_NAME } from "./constant";
import connectDb from "./db/index.js";
import express from 'express'


dotenv.config({
    path:'./env'
})

const app = express();

connectDb().then(()=>{
    app.listen(process.env.PORT|| 8000,()=>{
        console.log(`Server as running at port:${process.env.PORT} `)
    })
})
.catch((err)=>{
    console.log('MONGO DB Connection failed!!!',err);
    
})
































// import express from 'express'
// const app = express()

// (async()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error", (error)=>{
//         console.log("ERROR" ,error)
//         throw error
//        })
//        app.listen(process.env.PORT,()=>{
//         console.log(`App is listening on port ${process.env.PORT}`)
//        })
//     } catch (error) {

//         console.log("ERROR",error);
//         throw err
//     }
// })()