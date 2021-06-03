/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite16 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite16/costumes/costume1.svg", {
        x: 220.00000333333338,
        y: 39.956855273224846
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite16/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "close shop" },
        this.whenIReceiveCloseShop
      ),
      new Trigger(Trigger.BROADCAST, { name: "shop" }, this.whenIReceiveShop),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "ghjk" }, this.whenIReceiveGhjk)
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
    if (this.stage.vars.gold > 49) {
      this.broadcast("ghjk");
      this.stage.vars.gold += -50;
      this.stage.vars.atk += 40;
      yield* this.wait(30);
      this.stage.vars.atk += -40;
    }
  }

  *whenIReceiveGhjk() {
    while (true) {
      this.visible = false;
      yield;
    }
  }
}
