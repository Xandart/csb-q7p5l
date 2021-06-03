/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite9 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite9/costumes/costume1.svg", {
        x: 231.83333333333337,
        y: 75.67413278924394
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite9/sounds/pop.wav")];

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
    if (this.stage.vars.gold > 69) {
      this.stage.vars.gold += -70;
      this.stage.vars.atk += 60;
      this.broadcast("red");
      while (true) {
        this.visible = false;
        yield;
      }
    }
  }
}
