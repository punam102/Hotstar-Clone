const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const DB_CONNECTION = require("./config/db");
const PORT = process.env.PORT ;

app.listen(PORT,()=>{
     console.log(`App is listening at port ${PORT}`);
});

DB_CONNECTION();