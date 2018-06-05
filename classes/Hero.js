"use strict";

function Hero(name, secretIdentity, health, isAlive = true) {
    LivingThing.call(this, name, health, isAlive = true);
    this.secretIdentity = secretIdentity;
    // this.attack("Monster")

}

//is the object create necessary still seems to work without it?  What exactly does this do
Hero.prototype = Object.create(LivingThing.prototype);
Hero.prototype.constructor = Hero;

Hero.prototype.attack = function (monster) {
    while (monster.isAlive === true && this.isAlive === true){

        this.damageToHero = Math.floor(Math.random() * 5 + 2)
        console.log(this.name +' current health = (' + this.health +  ') damage to hero this turn ' + this.damageToHero + '. Now our hero has ' + (this.health-this.damageToHero))
        this.health -= this.damageToHero

        if (this.health < 1) {
            this.isAlive = false
        }

        this.damageToMonster = Math.floor(Math.random() * 9 + 1)

        console.log('Monster has a health of ' + monster.health + ' and superman curb stomped ' + this.damageToMonster + ' out of the villian this round!')
        monster.health -= this.damageToMonster
        if (monster.health < 1) {
            monster.isAlive = false
        }
    }
}

Hero.prototype.fight = function (monsterArray) {
    for (let i = 0; i < monsterArray.length; i++) {
        this.attack(monsterArray[i])
    }
}



