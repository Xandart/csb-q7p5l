/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite13 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite13/costumes/costume1.svg", {
        x: 261.13111584685544,
        y: 189.4999999999998
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite13/sounds/pop.wav")];

    this.triggers = [];
  }
}
