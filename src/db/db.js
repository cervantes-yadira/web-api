import connection from './connection.js';

export const getAllGames = async () => {
    const [results, fields] = await connection.query(
        "SELECT * FROM games", []
    );
    return results;
}

export const getGameByName = async (name) => {
    const [results] = await connection.query(
        "SELECT * FROM games WHERE title = ?", [name]
    );
    return results;
}

export const addGame = async (gameData) => {
    const [results] = await connection.query(
        "INSERT INTO games (title, release_date, genre, developer, rating) VALUES (?, ?, ?, ?, ?)", 
        [
            gameData.title, 
            gameData.release_date, 
            gameData.genre,
            gameData.developer, 
            gameData.rating
        ]
    );
    return results;
}

export const updateGame = async (updatedGame) => {
    
}

export const deleteGame = async title => {
    const [results] = await connection.query("DELETE FROM games WHERE title=?", 
        [title]
    )
    return results;
}