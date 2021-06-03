/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite17 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite17/costumes/costume1.svg", {
        x: 223.0129061410941,
        y: 88.15395955149302
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite17/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "close shop" },
        this.whenIReceiveCloseShop
      ),
      new Trigger(Trigger.BROADCAST, { name: "shop" }, this.whenIReceiveShop),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveCloseShop() {
    this.visible = false;
  }

  *whenIReceiveShop() {
    this.visible = true;
    yield* this.wait(0.01);
    this.moveAhead();
    yield* this.wait(0.01);
    this.moveAhead();
  }

  *whenthisspriteclicked() {
    if (this.stage.vars.gold > 499) {
      this.stage.vars.gold += -500;
      this.stage.vars.atk += 200;
      this.broadcast("Golden Ace");
      while (true) {
        this.visible = false;
        yield;
      }
    }
  }
}
