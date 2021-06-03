/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite8 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite8/costumes/costume1.svg", {
        x: 29.765329940628135,
        y: 27.372828538771415
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite8/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "shop" }, this.whenIReceiveShop),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "close shop" },
        this.whenIReceiveCloseShop
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveShop() {
    this.visible = true;
    this.moveAhead();
    yield* this.wait(0.01);
    this.moveAhead();
  }

  *whenthisspriteclicked() {
    this.broadcast("close shop");
  }

  *whenIReceiveCloseShop() {
    this.visible = false;
  }
}
