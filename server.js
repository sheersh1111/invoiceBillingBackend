

const { Console } = require("console");
const app = require("./app");
const connectDatabase= require("./config/database")
const dotenv=require("dotenv")
const { startScheduledTask } = require('./cronTask');

dotenv.config({path:"config/config.env"});






connectDatabase();

startScheduledTask();

const server =app.listen(process.env.PORT,()=>{
    console.log(`server is working on http://localhost:${process.env.PORT}`)
}) 
