/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite7 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite7/costumes/costume1.svg", {
        x: 232.50000000000009,
        y: 99.50000000000017
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite7/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "shop" }, this.whenIReceiveShop),
      new Trigger(
        Trigger.BROADCAST,
        { name: "close shop" },
        this.whenIReceiveCloseShop
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.effects.ghost = 30;
  }

  *whenIReceiveShop() {
    this.moveAhead();
    this.visible = true;
    this.goto(0, 0);
  }

  *whenIReceiveCloseShop() {
    this.visible = false;
  }
}
