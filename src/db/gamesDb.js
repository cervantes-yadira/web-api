import fs from 'fs/promises';

const gamesPath = './src/db/games.json';

export const getAllGames = async () => {
    let contents = await fs.readFile(gamesPath);
    contents = JSON.parse(contents); // convert buffered JSON to JS Object
    console.log(`Reads ${contents.length} game records`);
    return contents;
}

export const getGameById = async id => {
    let contents = await fs.readFile(gamesPath);
    contents = JSON.parse(contents); // convert buffered JSON to JS Object

    if(id > contents.length || id < 0) {
        return {
            error: `Game with ID ${id} not found!`
        }
    } else {
        contents = contents.at(id);
        return contents;
    }
}

export const getGameByName = async name => {
    let contents = await fs.readFile(gamesPath);
    contents = JSON.parse(contents); // convert buffered JSON to JS Object
    contents = contents.find(game => game.title === name);
    return contents;
}

export const addGame = async gameData => {
    let contents = await fs.readFile(gamesPath);
    contents = JSON.parse(contents);
    contents.push(gameData);
    // Preserve formatting
    contents = JSON.stringify(contents, null, 4);
    await fs.writeFile(gamesPath, contents)
    return gameData;
}

export const updateGame = async (id, updatedGame) => {
    let contents = await fs.readFile(gamesPath);
    contents = JSON.parse(contents);

    if(id > contents.length || id < 0) {
        return undefined;
    } else {
        contents[id] = updatedGame;
        contents = JSON.stringify(contents, null, 4);
        await fs.writeFile(gamesPath, contents);
        return updatedGame;
    }
}

export const deleteGame = async title => {
    let contents = await fs.readFile(gamesPath);
    contents = JSON.parse(contents);
    const numRecords = contents.length;
    contents = contents.filter(game => game.title !== title);
    await fs.writeFile(gamesPath, JSON.stringify(contents, null, 4));
    return contents.length < numRecords;
}

export default {
    getAllGames,
    getGameById,
    getGameByName,
    addGame,
    updateGame,
    deleteGame
}