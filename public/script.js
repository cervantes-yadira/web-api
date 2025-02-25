window.onload = async () => {
    //request games from our API
    const uri = "/api/v1/games";
    const config = {
        method: "get",
        mode: "cors"
    }
    const response = await fetch(uri, config);
    const json = await response.json();
    console.log(json);
    loadUI(json.data);

    const button = document.getElementById("gameSubmit");
    button.onclick = gameSubmit;
}

async function gameSubmit(event) {
    //prevent the default behavior of this event (form submission)
    event.preventDefault();

    const title = document.getElementById("title").value;
    const genre = document.getElementById("genre").value;

    const newGame = {
        title,
        genre,
        developer: "CD Project Red",
        rating: 90,
        release_date: "2024-08-20"
    }

    //make a post request to the server to save the data
    const result = await fetch("/api/v1/games", {
        method: "post",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newGame)
    })
    console.log(result);

    const gameAdded = await result.json();
    console.log(gameAdded);

    //update our DOM
    const main = document.querySelector("#games");
    addGame(newGame, main);
}

function loadUI(games) {
    const main = document.querySelector("#games");

    for (const game of games) {
        addGame(game, main);
    }
}

function addGame(game, main) {
    //create DOM elements
    const section = document.createElement("section");
    const buttonDelete = document.createElement("button");
    const h2 = document.createElement("h2");
    const ul = document.createElement("ul");

    //add properties
    h2.innerHTML = game.title;
    buttonDelete.className = "delete";
    buttonDelete.innerHTML = "x";

    buttonDelete.onclick = deleteGame;

    const details = [game.genre, game.developer, game.rating, game.release_date];

    for (const detail of details) {
        addGameDetail(ul, detail);
    }

    //nest elements
    section.appendChild(buttonDelete);
    section.appendChild(h2);
    section.appendChild(ul);
    main.appendChild(section);
}

async function deleteGame(event) {
    //get the title of the game
    const title = event.target.parentElement.children[1].innerHTML;
    console.log(title);

    //make the DELETE request to the server...
    const result = await fetch(`/api/v1/games/${title}`, {
        method: "delete",
        mode: "cors"
    })

    //remove the parent game section
    event.target.parentElement.remove();
}

function addGameDetail(ul, detail) {
    const li = document.createElement("li");
    li.innerHTML = detail;
    ul.appendChild(li);
}