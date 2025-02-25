import { Router } from 'express';
import { getAllGames, getGameByName, addGame, updateGame, deleteGame } from './../controllers/gamesController.js';

const router = Router();

//define routes here...
router.get("/", getAllGames);
router.get("/:gameName", getGameByName);
router.post("/", addGame);
router.put("/", updateGame);
router.delete("/:title", deleteGame);

export default router;