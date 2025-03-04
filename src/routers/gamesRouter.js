import { Router } from 'express';
import { getAllGames, getGameByTitle, addGame, updateGame, deleteGame } from './../controllers/gamesController.js';

const router = Router();

// Define routes here...
router.get("/", getAllGames);
router.get("/:title", getGameByTitle);
router.post("/", addGame);
router.put("/:title", updateGame);
router.delete("/:title", deleteGame);

export default router;