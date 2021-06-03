/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 47.63018858518484,
        y: 24.740843295748988
      }),
      new Costume("costume4", "./Sprite1/costumes/costume4.svg", {
        x: 47.63018868147873,
        y: 24.740841365992054
      }),
      new Costume("costume5", "./Sprite1/costumes/costume5.svg", {
        x: 47.63018726666357,
        y: 24.740839661741063
      }),
      new Costume("costume6", "./Sprite1/costumes/costume6.svg", {
        x: 47.63018585184841,
        y: 24.740837957490072
      }),
      new Costume("costume7", "./Sprite1/costumes/costume7.svg", {
        x: 47.63018443703325,
        y: 24.74083625323908
      }),
      new Costume("costume2", "./Sprite1/costumes/costume2.svg", {
        x: 58.59997858518483,
        y: 8.944353295748982
      })
    ];

    this.sounds = [new Sound("1911-2", "./Sprite1/sounds/1911-2.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.BROADCAST, { name: "ded" }, this.whenIReceiveDed)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (1 < this.stage.vars.hp) {
        if (!this.keyPressed("space")) {
          this.costume = "costume1";
        }
        if (this.keyPressed("space")) {
          yield* this.startSound("recording3");
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

  *whenGreenFlagClicked2() {
    this.stage.vars.atk = 3;
    this.goto(-204, 40);
  }

  *whenGreenFlagClicked3() {
    while (!(this.stage.vars.hp < 1)) {
      null;
      yield;
    }
    /* TODO: Implement stop other scripts in sprite */ null;
    this.costume = "costume2";
    while (true) {
      this.broadcast("ded");
      yield;
    }
  }

  *whenIReceiveDed() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
