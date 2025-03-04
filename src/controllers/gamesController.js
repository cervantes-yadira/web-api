import db from './../db/db.js';

export const getAllGames = async (req, res) => {
    res.status(200);
    const dataResults = await db.getAllGames();

    res.json({
        message: "success",
        data: dataResults
    });
}

export const getGameByTitle = async (req, res) => {
    const { title } = req.params;
    const game = await db.getGameByTitle(title);

    if(game) {
        res.status(200);
        res.json({
            message: "success",
            data: game
        });
    } else {
        res.status(404).json({
            message: `${title} not found!`
        });
    }
}

export const addGame = async (req, res) => {
    const addedGame = await db.addGame(req.body);
    res.status(201);
    res.json({
        message: 'Game added successfully!',
        data: addedGame
}   );
}

export const updateGame = async (req, res) => {
    const { title } = req.params;
    const updatedGame = await db.updateGame(title, req.body);

    if(updatedGame) {
        res.status(200);
        res.json({
            message: 'Game updated successfully',
            data: updatedGame
        })
    } else {
        res.status(400).json({message: `No game found with title ${title}!`});
    }
}

export const deleteGame = async (req, res) => {
    const isDeleted = await db.deleteGame(req.params.title);

    if(isDeleted) {
        res.status(200);
        res.json({
            message: 'Game deleted successfully',
            data: isDeleted
        })
    } else {
        res.status(404).json({message: `No game found with title: ${req.params.title}`});
    }
}