import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config({
    path: './config.env'
});

const { HOST, PORT, USER, PASSWORD, DATABASE } = process.env;

const config = {
    host: HOST,
    port: PORT,
    user: USER,
    password: PASSWORD,
    database: DATABASE
}

let connection;

try {
    connection = await mysql.createConnection(config);
    console.log('Connected to database');
} catch (error) {
    console.log(error);
}

export default connection;