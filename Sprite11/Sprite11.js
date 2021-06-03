/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite11 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite11/costumes/costume1.svg", {
        x: 37.37499500000001,
        y: 23.840876812414763
      }),
      new Costume("costume3", "./Sprite11/costumes/costume3.svg", {
        x: 45.70834000000005,
        y: 24.262847310678666
      }),
      new Costume("costume2", "./Sprite11/costumes/costume2.svg", {
        x: 51.595330413584094,
        y: 48.216861309823656
      }),
      new Costume("costume4", "./Sprite11/costumes/costume4.svg", {
        x: 37.0000150411463,
        y: 61.17254630161506
      }),
      new Costume("costume5", "./Sprite11/costumes/costume5.svg", {
        x: 61.66669309158735,
        y: 75.83920296828167
      }),
      new Costume("costume6", "./Sprite11/costumes/costume6.svg", {
        x: 61.6666854193266,
        y: 75.83919931929397
      }),
      new Costume("costume7", "./Sprite11/costumes/costume7.svg", {
        x: 84.38910758144314,
        y: -34.66667999999996
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite11/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.BROADCAST, { name: "ded" }, this.whenIReceiveDed)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    this.costume = "costume1";
    this.visible = true;
    this.goto(235, this.random(77, -22));
    for (let i = 0; i < this.random(200, 270) - this.stage.vars.atk; i++) {
      while (!this.keyPressed("space")) {
        0;
        yield;
      }
      yield;
    }
    /* TODO: Implement stop other scripts in sprite */ null;
    this.stage.vars.gold += 3;
    for (let i = 0; i < 6; i++) {
      this.costumeNumber += 1;
      yield* this.wait(0.01);
      yield;
    }
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.deleteThisClone();
  }

  *startAsClone2() {
    while (true) {
      if (1 < this.stage.vars.hp) {
        this.x += this.stage.vars.zombiespeed;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    yield* this.wait(15);
    for (let i = 0; i < 50; i++) {
      this.createClone();
      yield* this.wait(this.random(1, 10));
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.stage.vars.gold = 50;
  }

  *startAsClone3() {
    while (!this.touching(this.sprites["Sprite13"].andClones())) {
      null;
      yield;
    }
    this.visible = false;
    this.stage.vars.hp += -20;
  }

  *whenGreenFlagClicked4() {
    this.stage.vars.zombiespeed = -2;
  }

  *whenIReceiveDed() {
    while (true) {
      /* TODO: Implement stop other scripts in sprite */ null;
      yield;
    }
  }
}
