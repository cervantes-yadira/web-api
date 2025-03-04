window.onload = async () => {
    const uri = '/api/v1/games';
    const config = {
        method: 'get',
        mode: 'cors'
    }
    const response = await fetch(uri, config);
    const json = await response.json();
    loadUI(json.data);
    
    document.querySelector('#gameSubmit').onclick = addNewGame;
}

async function deleteGame(event) {
        // Prevent default behavior of this event
        event.preventDefault();
        const title = event.target.parentElement.children[1];
        console.log(title)
    
        // Make POST request
        const result = await fetch(`/api/v1/games/${title.textContent}`, {
            method: 'delete',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    
        // Update DOM
        title.delete();
}

async function addNewGame(event) {
    // Prevent default behavior of this event
    event.preventDefault();
    const title = document.getElementById('title').value;
    const genre = document.getElementById('genre').value;

    const newGame = {
        title, 
        genre,
        developer: 'CD Projekt Red',
        rating: '60',
        release_date: '2024-08-25'
    }

    // Make POST request
    const result = await fetch('/api/v1/games', {
        method: 'post',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newGame)
    })

    // Update DOM
    const game = await result.json();
    const main = document.querySelector('#games');
    addGame(game, main);
}

function loadUI(games) {
    const main = document.querySelector('#games');

    for (const game of games) {
        addGame(game, main);
    }
}

function addGame(game, main) {
    // Create DOM elements
    const section = document.createElement('section');
    const h2 = document.createElement('h2');
    const button = document.createElement('button');
    const ul = document.createElement('ul');

    // Configure button
    button.setAttribute('type', 'submit');
    button.innerHTML = 'X';
    button.className = 'delete-button';
    button.onclick = deleteGame;

    h2.innerHTML = game.title;

    const details = [game.genre, game.developer, game.rating, game.release_date];

    // Create list items
    for(const detail of details) {
        addGameDetail(ul, detail);
    }

    section.appendChild(button);
    section.appendChild(h2);
    section.appendChild(ul);
    main.appendChild(section);
}

function addGameDetail(ul, detail) {
    const li = document.createElement('li');
    li.innerHTML = detail;
    ul.appendChild(li);
}
// origin = port, domain, protocol