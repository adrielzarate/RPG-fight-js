'use strict';

class Character {
    constructor(name = 'character 1', life = 100, power = 100) {
        this.name = name;
        this.life = life;
        this.power = power;
    }

    attack() {
        console.log('--> attack!');
        return this.power * .5;
    }

    cure() {
        console.log('--> cure!');
        this.life += -(this.life - 100) / 10;
    }

    pass() {
        console.log('--> pass!');
        // return 'pass';
    }

    damage(enemyAttack) {
        this.life -= enemyAttack;
    }
}

export default Character;