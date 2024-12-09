import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose
    .connect(process.env.MONGO_URI, {
        dbName: "MERN RESTAURANTS"
    })
    .then(()=>{
        console.log("Connected to database successfully!");

    })
    .catch(err=>{
        console.log("some error occured while connecting to database! ${err}");
    })
};