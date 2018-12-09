'use strict';

class Character {
    constructor(id, name = 'character 1', life = 100, magic = 100) {
        this.id = id;
        this.name = name;
        this.life = life;
        this.magic = magic;
    }

    attack() {
        console.log('--> attack!');
        return this.magic * .5;
    }

    damage(enemyAttack) {
        this.life -= enemyAttack;
    }

}

export default Character;