CREATE TABLE games (
    title VARCHAR(255) PRIMARY KEY,
    release_date DATE NOT NULL,
    genre VARCHAR(100) NOT NULL,
    developer VARCHAR(255) NOT NULL,
    rating INT CHECK (rating BETWEEN 0 AND 100) NULL
);

CREATE TABLE platforms (
    name VARCHAR(100) PRIMARY KEY
);

CREATE TABLE game_platforms (
    game_title VARCHAR(255),
    platform_name VARCHAR(100),
    PRIMARY KEY (game_title, platform_name),
    FOREIGN KEY (game_title) REFERENCES games(title) ON DELETE CASCADE,
    FOREIGN KEY (platform_name) REFERENCES platforms(name) ON DELETE CASCADE
);

INSERT INTO games (title, release_date, genre, developer, rating) VALUES
    ('Final Fantasy VII Rebirth', '2024-02-29', 'Role-Playing Game (RPG)', 'Square Enix', 92),
    ('Elden Ring: Shadow of the Erdtree', '2024-06-21', 'Hard', 'FromSoftware', 100),
    ('Metaphor: ReFantazio', '2024-10-11', 'JRPG', 'Studio Zero', 94),
    ('Black Myth: Wukong', '2024-08-20', 'Action RPG', 'Game Science', 90),
    ('Grand Theft Auto VI', '2025-11-15', 'Action-Adventure', 'Rockstar Games', NULL),
    ('Factorio', '2020-08-14', 'Simulation', 'Wube Software', NULL);

INSERT INTO platforms (name) VALUES
    ('PlayStation 5'),
    ('PlayStation 4'),
    ('Windows'),
    ('Xbox One'),
    ('Xbox Series X/S'),
    ('PC'),
    ('MacOS'),
    ('Linux')
ON DUPLICATE KEY UPDATE name=name;

INSERT INTO game_platforms (game_title, platform_name) VALUES
    ('Final Fantasy VII Rebirth', 'PlayStation 5'),
    ('Elden Ring: Shadow of the Erdtree', 'PlayStation 4'),
    ('Elden Ring: Shadow of the Erdtree', 'PlayStation 5'),
    ('Elden Ring: Shadow of the Erdtree', 'Windows'),
    ('Elden Ring: Shadow of the Erdtree', 'Xbox One'),
    ('Elden Ring: Shadow of the Erdtree', 'Xbox Series X/S'),
    ('Metaphor: ReFantazio', 'PlayStation 4'),
    ('Metaphor: ReFantazio', 'PlayStation 5'),
    ('Metaphor: ReFantazio', 'Windows'),
    ('Metaphor: ReFantazio', 'Xbox Series X/S'),
    ('Black Myth: Wukong', 'PlayStation 5'),
    ('Black Myth: Wukong', 'Windows'),
    ('Grand Theft Auto VI', 'PlayStation 5'),
    ('Grand Theft Auto VI', 'Xbox Series X/S'),
    ('Factorio', 'PC'),
    ('Factorio', 'MacOS'),
    ('Factorio', 'Linux');