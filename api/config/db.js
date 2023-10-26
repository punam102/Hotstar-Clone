const mongoose = require("mongoose");

const DB_CONNECTION = async ()=>{
    const MONGO_URI = process.env.MONGO_URI;
    try{
        const conn = await mongoose.connect(MONGO_URI);
        console.log(`Mongo DB is connected`);
    }catch (error){
        log(error)
    }
}
module.exports = DB_CONNECTION; 