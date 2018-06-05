"use strict";

function Monster (name, classification, health, isAlive = true) {
    LivingThing.call(this, name, health, isAlive);
    this.classification = classification;
}








this.damageToHero = Math.floor(Math.random() * 5 + 2)