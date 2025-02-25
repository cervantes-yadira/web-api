import express from 'express';
//import router from './routers/gamesRouter.js';
import cors from 'cors';

const app = express();

//allow cross origin script requests
app.use(cors({
    origin: "*"
}));

//serve up static files
app.use(express.static("./public"));

//parse JSON payloads
app.use(express.json());

//app.use("/api/v1/games", router);

const PORT = 3002;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));