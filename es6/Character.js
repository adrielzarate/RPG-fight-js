'use strict';

class Character {
    constructor(name = 'character 1', life = 100, power = 100) {
        this.name = name;
        this.life = life;
        this.power = power;
    }

    attack() {
        return this.power * .5;
    }

    cure() {
        this.life += -(this.life - 100) / 10;
    }

    pass() {}

    damage(enemyAttack) {
        this.life -= enemyAttack;
    }
}

export default Character;