import mongoose from "mongoose";
 
 const dbconnection=() => {
    mongoose
    .connect(process.env.MONGO_URI,{
        dbName:"Records", // Replace with your database namea
    })
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    })
};

export default dbconnection;