/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite10 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite10/costumes/costume1.svg", {
        x: 32.83333499999995,
        y: 48.33395861296103
      }),
      new Costume("costume4", "./Sprite10/costumes/costume4.svg", {
        x: 32.83332500000003,
        y: 48.3339593849104
      }),
      new Costume("costume5", "./Sprite10/costumes/costume5.svg", {
        x: 32.83326499999998,
        y: 48.33395876982081
      }),
      new Costume("costume6", "./Sprite10/costumes/costume6.svg", {
        x: 32.833304999999996,
        y: 48.3339593849104
      }),
      new Costume("costume7", "./Sprite10/costumes/costume7.svg", {
        x: 32.833304999999996,
        y: 48.3339593849104
      }),
      new Costume("costume2", "./Sprite10/costumes/costume2.svg", {
        x: 166,
        y: 9.179291718317359
      })
    ];

    this.sounds = [new Sound("1911-2", "./Sprite10/sounds/1911-2.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "red" }, this.whenIReceiveRed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.BROADCAST, { name: "red" }, this.whenIReceiveRed2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(-175, -74);
  }

  *whenIReceiveRed() {
    this.visible = true;
    while (true) {
      if (1 < this.stage.vars.hp) {
        if (!this.keyPressed("space")) {
          this.costume = "costume1";
        }
        if (this.keyPressed("space")) {
          this.costume = "costume4";
          yield* this.wait(0.03);
          this.costume = "costume5";
          yield* this.wait(0.02);
          this.costume = "costume6";
          yield* this.startSound("1911-2");
          yield* this.wait(0.01);
          this.costume = "costume7";
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {}

  *whenIReceiveRed2() {
    while (!(this.stage.vars.hp < 1)) {
      null;
      yield;
    }
    while (true) {
      /* TODO: Implement stop other scripts in sprite */ null;
      this.costume = "costume2";
      yield;
    }
  }
}
