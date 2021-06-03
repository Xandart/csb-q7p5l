/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite12 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite12/costumes/costume1.svg", {
        x: 220.00000333333338,
        y: 53.07198325234245
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite12/sounds/pop.wav")];

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
    if (this.stage.vars.gold > 139) {
      this.stage.vars.gold += -140;
      this.stage.vars.atk += 90;
      this.broadcast("blobby");
      while (true) {
        this.visible = false;
        yield;
      }
    }
  }
}
