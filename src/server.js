import express from 'express';
import cors from 'cors';
import router from './routers/gamesRouter.js';

const app = express();

// Allows cross-origin script requests
app.use(cors());

// Serve static files
app.use(express.static('./public'));

// Parse JSON payloads
app.use(express.json());

app.use("/api/v1/games", router);

app.listen(8001, () => console.log('Server started on 8001'));