'use strict';

import Hero from './Hero.js';
import Enemy from './Enemy.js';

class Game {
    constructor(heroesData, enemiesData) {
        this.heroes = [];
        this.enemies = [];

        this.playerTurn = true;
        this.turnPosition = 0;

        this.generateCharacters(this.heroes, heroesData, Hero);
        this.generateCharacters(this.enemies, enemiesData, Enemy);

        this.init();
    }

    generateCharacters(type, data, classType) {
        for (let i = 0; i < data.length; i++) {

            const name = data[i].name;
            const life = data[i].life;
            const power = data[i].power;

            type.push(new classType(name, life, power));
        }
    }

    actions(character, todo, oponent) {
        switch (todo) {
        case 'attack':
            oponent.damage(character.attack());
            console.log('--> attack!');
            break;
        case 'pass':
            character.pass();
            console.log('--> pass!');
            break;
        case 'cure':
            // character.cure();
            console.log('--> cure!');
            break;
        default:
            console.log('accion inexistente!');
            break;
        }
        this.init();
    }

    play(todo, oponentPosition) {

        if (this.playerTurn && this.turnPosition < this.heroes.length && this.heroes[this.turnPosition].life > 0) {

            this.actions( this.heroes[this.turnPosition], todo, this.enemies[oponentPosition] );

            this.turnPosition++;
            console.log('Turno de Heroe', this.turnPosition);

            if( this.turnPosition >= this.heroes.length ) {
                console.log('pasa a enemigos');
                this.playerTurn = false;
                this.turnPosition = 0;
            }
        } else if (this.turnPosition < this.enemies.length && this.enemies[this.turnPosition].life > 0) {
            console.log('Turno de Enemigo', this.turnPosition);
            // console.log('escoge attack, pass o cure');

            this.turnPosition++;

            this.actions( this.enemies[this.turnPosition], todo, this.heroes[oponentPosition] );

            if( this.turnPosition >= this.enemies.length ) {
                console.log('pasa a heroes');
                this.playerTurn = true;
                this.turnPosition = 0;
            }
        }
    }

    init() {
        console.log('-------------------------------------------------------------------------------------------------');
        console.log('play: attack, pass o cure');

        console.log('======================================================');
        for( let i = 0; i < this.heroes.length; i++ ) {
            console.log(this.heroes[i].name + ' : ' + this.heroes[i].life);
        }
        console.log('--------------');

        for( let i = 0; i < this.enemies.length; i++ ) {
            console.log(this.enemies[i].name + ' : ' + this.enemies[i].life);
        }

        console.log('======================================================');
    }

}

export default Game;