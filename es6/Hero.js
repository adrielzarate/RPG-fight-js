'use strict';

import Character from './Character.js';

class Hero extends Character {

    // constructor(name, life, power) {
    //     super(name, life, power);
    // }

    cure() {
        console.log('--> cure!');
        this.life += -(this.life - 100) / 10;
    }

    pass() {
        console.log('--> pass!');
        // return 'pass';
    }

}

export default Hero;