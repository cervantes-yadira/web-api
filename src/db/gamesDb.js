import fs from 'fs/promises';

export const getAllGames = async () => {
    let contents = await fs.readFile('./src/db/games.json');
    contents = JSON.parse(contents); //convert buffered JSON text to JS object

    console.log(`Read ${contents.length} game records`);
    return contents;
}

export const getGameByName = async (name) => {
    let contents = await fs.readFile('./src/db/games.json');
    contents = JSON.parse(contents); //convert buffered JSON text to JS object

    const foundGame = contents.find(game => game.title === name);
    return foundGame;
}

export const addGame = async (gameData) => {
    let contents = await fs.readFile('./src/db/games.json');
    contents = JSON.parse(contents); //convert buffered JSON text to JS object

    contents.push(gameData);
    await fs.writeFile('./src/db/games.json', JSON.stringify(contents, null, 4));

    return gameData;
}

export const updateGame = async (updatedGame) => {
    let contents = await fs.readFile('./src/db/games.json');
    contents = JSON.parse(contents); //convert buffered JSON text to JS object

    const found = contents.find(game => game.title === updatedGame.title);
    if (found) {
        //copy new values (leave the name/id alone)
        found.release_date = updatedGame.release_date;
        found.platforms = updatedGame.platforms;
        found.genre = updatedGame.genre;
        found.developer = updatedGame.developer;
        found.rating = updatedGame.rating;
    
        await fs.writeFile('./src/db/games.json', JSON.stringify(contents, null, 4));
    
        return updatedGame;
    } else {
        return null;
    }
}

export const deleteGame = async title => {
    let contents = await fs.readFile('./src/db/games.json');
    contents = JSON.parse(contents); //convert buffered JSON text to JS object

    const numRecords = contents.length;
    contents = contents.filter(game => game.title !== title);

    await fs.writeFile('./src/db/games.json', JSON.stringify(contents, null, 4));
    
    //return success or not?
    return numRecords !== contents.length;
}