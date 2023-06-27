class Creature {
    number;
    id = 0;
    name;
    healthPoints;
    damage;
    defeat (who) {
        alert(`${who} уничтожен`);
    };

    constructor(name, healthPoints, damage) {
        this.id++;
    }

}

class Player extends Creature {
    #lvl;
    attack(other) {
        other.healthPoints -= this.damage;
        if(other.healthPoints <= 0) {
            super.defeat(other.name);
            this.#lvl++;
            return true;
        }
        return true;
    }
    get lvl() {
        console.log('Геттер lvl');
        return this.#lvl;
    }
    set lvl(lvl) {
        console.log('Сеттер lvl');
        this.#lvl = lvl;
    }
}

class Enemy extends Creature {
    attack(other) {
        other.healthPoints -= this.damage;
        if(other.healthPoints <= 0) {
            super.defeat(other.name);
            return true;
        }
        return false;
    }
}

const player1 = new Player('Валюха', 100, 15);
player1.number = 1;
player1.lvl = 1;
player1.name = 'Валюха';
player1.healthPoints = 100;
player1.damage = 15;

const enemy1 = new Enemy('Киборг', 80, 10);
enemy1.number = 1;
enemy1.name = 'Киборг';
enemy1.healthPoints = 80;
enemy1.damage = 10;

for (var i = 0; i < 100; i++) {
    player1.attack(enemy1);
    enemy1.attack(player1);
    if(player1.healthPoints <= 0 || enemy1.healthPoints <= 0) {
        alert(`Нанесено ударов: ${i + 1}`);
        break;
    }
}

console.log(player1);
console.log(enemy1);