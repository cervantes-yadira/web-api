import * as db from './../db/db.js';

export const getAllGames = async (req, res) => {
    res.status(200);

    const dataResults = await db.getAllGames();
    res.json({
        message: "success",
        data: dataResults
    })
}

export const getGameByName = async (req, res) => {
    const game = await db.getGameByName(req.params.gameName);

    if (game) { //found!
        res.status(200);
        res.json({
            message: "Found game!",
            data: game
        })
    } else { //not found!
        res.status(404);
        res.json({
            message: `Game ${req.params.gameName} not found`
        })
    }
}

export const addGame = async (req, res) => {
    const addedGame = await db.addGame(req.body);

    res.status(201);
    res.json({
        message: "Inserted new game!",
        data: addedGame
    })
}

export const updateGame = async (req, res) => {
    const updatedGame = await db.updateGame(req.body);

    if (updatedGame) { //found
        res.status(200);
        res.json({
            message: "Updated game!",
            data: updatedGame
        })
    } else { //not found!
        res.status(404);
        res.json({
            message: `Game ${req.body.title} not found`
        })
    }
}

export const deleteGame = async (req, res) => {
    const found = await db.deleteGame(req.params.title);

    if (found) { //found
        res.status(200);
        res.json({
            message: "Deleted game!"
        })
    } else { //not found!
        res.status(404);
        res.json({
            message: `Game ${req.params.title} not found`
        })
    }
}
