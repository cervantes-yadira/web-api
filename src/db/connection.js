import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

//read in our environment variables from config.env
dotenv.config({
    path: "./config.env"
})

const { HOST, PORT, USER, PASSWORD, DATABASE} = process.env;

//console.log(process.env);

const config = {
    host: HOST,
    port: PORT,
    user: USER,
    password: PASSWORD,
    database: DATABASE
}

const connection = await mysql.createConnection(config);
console.log("Connected to database");

export default connection;