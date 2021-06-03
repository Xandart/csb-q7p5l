/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite3/costumes/costume1.svg", {
        x: 37.375,
        y: 24.490839887247006
      }),
      new Costume("costume3", "./Sprite3/costumes/costume3.svg", {
        x: 45.7083433333334,
        y: 24.262845606427675
      }),
      new Costume("costume2", "./Sprite3/costumes/costume2.svg", {
        x: 51.59533041358392,
        y: 48.216861309823656
      }),
      new Costume("costume4", "./Sprite3/costumes/costume4.svg", {
        x: 37.0000150411463,
        y: 61.17254065785515
      }),
      new Costume("costume5", "./Sprite3/costumes/costume5.svg", {
        x: 61.66669309158726,
        y: 75.83919732452179
      }),
      new Costume("costume6", "./Sprite3/costumes/costume6.svg", {
        x: 61.66668541932634,
        y: 75.83920332190787
      }),
      new Costume("costume7", "./Sprite3/costumes/costume7.svg", {
        x: 84.3891153826076,
        y: -34.666678677220716
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
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
    for (let i = 0; i < this.random(30, 70) - this.stage.vars.atk; i++) {
      while (!this.keyPressed("space")) {
        0;
        yield;
      }
      yield;
    }
    /* TODO: Implement stop other scripts in sprite */ null;
    this.stage.vars.gold += 2;
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
    this.createClone();
    for (let i = 0; i < 90; i++) {
      yield* this.wait(this.random(0.01, 5));
      this.createClone();
      yield;
    }
  }

  *startAsClone3() {
    while (!this.touching(this.sprites["Sprite13"].andClones())) {
      null;
      yield;
    }
    this.visible = false;
    this.stage.vars.hp += -5;
  }

  *whenIReceiveDed() {
    while (true) {
      /* TODO: Implement stop other scripts in sprite */ null;
      yield;
    }
  }
}
