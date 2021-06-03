/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite18 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite18/costumes/costume1.svg", {
        x: 47.337224138555655,
        y: 79.40936216479938
      }),
      new Costume("costume4", "./Sprite18/costumes/costume4.svg", {
        x: 47.33722307942102,
        y: 79.40936413576176
      }),
      new Costume("costume5", "./Sprite18/costumes/costume5.svg", {
        x: 47.33722307942102,
        y: 79.40936413576176
      }),
      new Costume("costume6", "./Sprite18/costumes/costume6.svg", {
        x: 47.33722307942102,
        y: 79.40936413576176
      }),
      new Costume("costume7", "./Sprite18/costumes/costume7.svg", {
        x: 47.33722307942102,
        y: 79.40936413576176
      }),
      new Costume("costume2", "./Sprite18/costumes/costume2.svg", {
        x: 108.25,
        y: 35.12764579328109
      })
    ];

    this.sounds = [new Sound("1911-2", "./Sprite18/sounds/1911-2.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Golden Ace" },
        this.whenIReceiveGoldenAce
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Golden Ace" },
        this.whenIReceiveGoldenAce2
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(-9, -18);
  }

  *whenIReceiveGoldenAce() {
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

  *whenIReceiveGoldenAce2() {
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
