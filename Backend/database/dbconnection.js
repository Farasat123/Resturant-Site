import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.mongodb_URL, {
        dbName: "Resturant_Site",
    }).then(() => {
        console.log("DataBase Connected Successfully");
    }).catch((err) => {
        console.log("DataBase Connection Failed");
        console.log(err);
    });
}