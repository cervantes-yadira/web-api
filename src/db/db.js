import connection from './connection.js';

export const getAllGames = async () => {
    const [results] = await connection.query(
        'SELECT * FROM games', []
    );
    return results;
}

export const getGameByTitle = async title => {
    const [results] = await connection.query(
        'SELECT * FROM games WHERE title = ?', [title]
    );
    return results;
}

export const addGame = async gameData => {
    const { title, release_date, genre, developer, rating } = gameData;
    const [results] = await connection.query(
        'INSERT INTO games (title, release_date, genre, developer, rating) VALUES (?, ?, ?, ?, ?)', 
        [title, release_date, genre, developer, rating]
    );
    return results;
}

export const updateGame = async (title, updatedGame) => {

}

export const deleteGame = async title => {
    const [results] = await connection.query(
        'DELETE FROM games WHERE title = ?', [title]
    );

    return results;
}

export default {
    getAllGames,
    getGameByTitle,
    addGame,
    updateGame,
    deleteGame
}