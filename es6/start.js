'use strict';

import Game from './Game.js';

const characters = {
    heroes: [
        {
            name: 'heroe1',
            life: 100,
            magic: 100,
            pic: '../assets/img/hero.png'
        },
        {
            name: 'heroe2',
            life: 1,
            magic: 100,
            pic: '../assets/img/hero.png'
        },
        {
            name: 'heroe3',
            life: 80,
            magic: 100,
            pic: '../assets/img/hero.png'
        }
        ,
        {
            name: 'heroe4',
            life: 80,
            magic: 100,
            pic: '../assets/img/hero.png'
        }
    ],
    enemies: [
        {
            name: 'enemy1',
            life: 100,
            magic: 100,
            pic: '../assets/img/enemy.png'
        },
        {
            name: 'enemy2',
            life: 100,
            magic: 100,
            pic: '../assets/img/enemy.png'
        },
        {
            name: 'enemy3',
            life: 100,
            magic: 100,
            pic: '../assets/img/enemy.png'
        }
    ]
};

const mygame = () => new Game(characters);

mygame();

export default mygame;

// play('attack', 1);
// play('cure', 1);
// play('pass', 1);

