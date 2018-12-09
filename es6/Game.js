'use strict';

import { default as HeroClass } from './Hero.js';
import { heroTemplate } from '../templates/Hero.js';
import { default as EnemyClass } from './Enemy.js';
import { enemyTemplate } from '../templates/Enemy.js';

class Game {

    constructor(characters) {

        this.heroes = [];
        this.enemies = [];

        this.gameState = {};

        this.heroesArea = document.getElementById('heroesArea');
        this.enemiesArea = document.getElementById('enemiesArea');

        this.panelName = document.getElementById('panel-name');
        this.panelLife = document.getElementById('panel-life');
        this.panelMagic = document.getElementById('panel-magic');
        
        this.heroTemplate = heroTemplate;
        this.enemyTemplate = enemyTemplate;

        // this.heroesTurn = true;
        this.currentTurn = {
            team: 'heroes',
            player: 0,
            actions: [
                // {
                //     playerIndex: '',
                //     attack: '',
                //     cure: '',
                //     pass: ''
                // }
            ]
        };

        this.generateCharacters('heroes', characters, HeroClass);
        this.generateCharacters('enemies', characters, EnemyClass);

        this.start();

        // this.checkTurn();
    }

    // setCharacterstState(type, data, classType) {}
    // generateDOMCharacters(type, data, classType) {}

    generateCharacters(type, character, classType) {

        for (let i = 0; i < character[type].length; i++) {

            const id = `${type}-${i}`;
            const name = character[type][i].name;
            const life = character[type][i].life;
            const magic = character[type][i].magic;

            this[type][`${type}-${i}`] = new classType(id, name, life, magic);

            if( type === 'heroes') {
                let heroTemplate = this.heroTemplate({
                    id,
                    name,
                    life,
                    magic
                });
                this.heroesArea.insertAdjacentHTML( 'beforeend', heroTemplate );
            } else {
                let enemyTemplate = this.enemyTemplate({
                    id: id
                });
                this.enemiesArea.insertAdjacentHTML( 'beforeend', enemyTemplate );
            }
        }
    }

    start() {
        const heroesDOM = document.querySelectorAll('.hero');
        heroesDOM.forEach( heroe => {
            // this.attachClick(heroe, this.addClassFocus.bind(this));
            this.attachClick(heroe, this.enableHeroeActions.bind(this));
        });
    }

    getSiblings(elTarget) {
        return [...elTarget.parentElement.children].filter( selfTarget => selfTarget != elTarget );
    }

    addClassFocus(elTarget) {
        const siblings = this.getSiblings(elTarget);
        siblings.forEach( sibling => {
            sibling.classList.remove('focus');
        });
        elTarget.classList.add('focus');
    }

    enableHeroeActions(elTarget, clickEvent) {

        const heroeId = elTarget.attributes.id.textContent;
        const actionsDOM = document.querySelectorAll('.action');

        actionsDOM.forEach( action => {
            this.attachClick(action, this.addClassFocus.bind(this));
        });

        this.addClassFocus(elTarget);

        this.panelName.textContent = this.heroes[heroeId].name;
        this.panelLife.textContent = this.heroes[heroeId].life;
        this.panelMagic.textContent = this.heroes[heroeId].magic;

    }

    attachClick(characterTarget, action) {
        characterTarget.addEventListener('click', (e) => {
            console.log('click added!');
            action(characterTarget, e);
        }, false);
    }

    detachClick(characterTarget) {
        characterTarget.removeEventListener('click', (e) => {
            console.log('click removed!');
        });
    }

    actions(character, todo, oponent) {
        switch (todo) {
        case 'attack':
            console.log('select an enemy to attack');
            // oponent.damage(character.attack());
            break;
        case 'cure':
            console.log('select your self or other hero to cure');
            // character.cure();
            break;
        case 'pass':
            character.pass();
            break;
        default:
            console.log('accion inexistente!');
            break;
        }
        this.positionTurn++;
    }

    doAction() {}

    checkChangeTurn(team) {
        if( this.positionTurn < team.length ) {
            if(team[this.positionTurn].life <= 0) {
                this.actions( team[this.positionTurn], 'pass' );
            }
        } else {
            this.heroesTurn = !this.heroesTurn;
            this.positionTurn = 0;
        }
    }

    checkTurn() {
        /**/
        this.logStates();
        /**/
        if ( this.currentTurn.team === 'heroes' ) {
            // this.checkChangeTurn(this.heroes);
            console.log('Selecciona un heroe ');

            for( let i = 0; i < this.heroes.length; i++ ) {
                for( let j = 0; j <= this.currentTurn.actions.length; j++ ) {

                    let playerIndex = this.currentTurn.actions[j].playerIndex;
                    if ( !this.heroes[playerIndex] ) console.log( 'heroe disponible ' + i );

                }
            }

        } else {
            // this.checkChangeTurn(this.enemies);
            // this.enemyAction();
            console.log('Turno enemigos');
        }

        console.log(this.currentTurn);

        // if( this.heroesTurn ) { console.log('Heroes'); } else { console.log('Enemies'); }
        // console.log('Turno de personaje', this.positionTurn);
    }

    enemyAction() {
        const livingHeroes = this.heroes.filter(heroe => function() {
            if( heroe.life > 1) return this.heroes.indexOf(heroe);
        });

        console.log(livingHeroes);

        // play('attack', heroPosition);
    }

    // play(todo, oponentPosition) {
    setAction(currentPlayer, todo) {
        // this.actions( this.heroes[this.positionTurn], todo, this.enemies[oponentPosition] );

        this.currentTurn.player = currentPlayer;

        if ( todo === 'attack' ) {
            console.log('select an enemy to attack');
            // and enable choosenCharacter input
        }
        else if ( todo === 'cure' ) {
            console.log('select your self or other hero to cure');
            // and enable choosenCharacter input
        }
        else {
            this.heroes[this.positionTurn].action = todo;
            this.checkTurn();
        }
    }

    setOponentToAttack(oponentIndex) {
        this.currentTurn.actions.push(
            {
                playerIndex: this.currentTurn.player,
                attack: oponentIndex
            }
        );
        this.checkTurn();
    }

    setFriendToCure(friendIndex) {
        this.currentTurn.actions.push(
            {
                playerIndex: this.currentTurn.player,
                cure: friendIndex
            }
        );
        this.checkTurn();
    }


    logStates() {

        console.log('--------------------------------------------------------------------------------------------');

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