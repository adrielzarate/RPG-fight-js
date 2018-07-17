'use strict';

import Game from './Game.js';

function rpg(characters) {
    return new Game(characters.heroes, characters.enemies);
    // console.log(game.heroes);
    // console.log(game.enemies);
}

const mygame = rpg({
    heroes: [
        {
            name: 'heroe1',
            life: 100,
            power: 100
        },
        {
            name: 'heroe2',
            life: 0,
            power: 100
        },
        {
            name: 'heroe3',
            life: 100,
            power: 100
        }
    ],
    enemies: [
        {
            name: 'enemy1',
            life: 100,
            power: 100
        },
        {
            name: 'enemy2',
            life: 100,
            power: 100
        },
        {
            name: 'enemy3',
            life: 100,
            power: 100
        }
    ]
});

export default mygame;

// play('attack', 1);
// play('cure', 1);
// play('pass', 1);

