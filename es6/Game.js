'use strict';

import Hero from './Hero.js';
import Enemy from './Enemy.js';

class Game {
    constructor(heroesData, enemiesData) {
        this.heroes = [];
        this.enemies = [];

        this.heroesTurn = true;
        this.positionTurn = 0;

        this.generateCharacters(this.heroes, heroesData, Hero);
        this.generateCharacters(this.enemies, enemiesData, Enemy);

        this.checkTurn();
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
            break;
        case 'pass':
            character.pass();
            break;
        case 'cure':
            character.cure();
            break;
        default:
            console.log('accion inexistente!');
            break;
        }
    }

    checkChangeTurn(band) {
        if( this.positionTurn < band.length ) {
            if(band[this.positionTurn].life <= 0) {
                this.actions( band[this.positionTurn], 'pass' );
                this.positionTurn++;
            }
        } else {
            this.heroesTurn = !this.heroesTurn;
            this.positionTurn = 0;
        }
    }

    checkTurn() {
        this.init();
        if (this.heroesTurn) {
            this.checkChangeTurn(this.heroes);
        } else {
            this.checkChangeTurn(this.enemies);
        }

        if( this.heroesTurn ) { console.log('Heroes'); } else { console.log('Enemies'); }
        console.log('Turno de personaje', this.positionTurn);
    }

    play(todo, oponentPosition) {
        this.actions( this.heroes[this.positionTurn], todo, this.enemies[oponentPosition] );
        this.positionTurn++;
        this.checkTurn();
    }

    init() {

        console.log('-------------------------------------------------------------------------------------------------');

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