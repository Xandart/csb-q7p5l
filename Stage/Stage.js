/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 360.5,
        y: 348.5
      }),
      new Costume("backdrop2", "./Stage/costumes/backdrop2.svg", {
        x: 360.5,
        y: 348.5
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Golden Ace" },
        this.whenIReceiveGoldenAce
      )
    ];

    this.vars.myVariable = 0;
    this.vars.gold = 52;
    this.vars.hp = -1;
    this.vars.atk = 3;
    this.vars.spinLittleGuy = 0;
    this.vars.zombiespeed = -2;

    this.watchers.gold = new Watcher({
      label: "gold",
      style: "large",
      visible: true,
      value: () => this.vars.gold,
      x: 315,
      y: 166
    });
    this.watchers.hp = new Watcher({
      label: "HP",
      style: "large",
      visible: true,
      value: () => this.vars.hp,
      x: 313,
      y: 136
    });
  }

  *whenGreenFlagClicked() {
    this.costume = "backdrop1";
  }

  *whenIReceiveGoldenAce() {
    this.costume = "backdrop2";
  }
}
