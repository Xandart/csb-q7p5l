/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite14 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite14/costumes/costume1.svg", {
        x: 44.446029908224915,
        y: 5.613104908065793
      }),
      new Costume("costume4", "./Sprite14/costumes/costume4.svg", {
        x: 44.44603000000001,
        y: 5.613107766892284
      }),
      new Costume("costume5", "./Sprite14/costumes/costume5.svg", {
        x: 44.446030000000036,
        y: 5.613105533784534
      }),
      new Costume("costume6", "./Sprite14/costumes/costume6.svg", {
        x: 44.446030000000036,
        y: 5.6131005337845465
      }),
      new Costume("costume7", "./Sprite14/costumes/costume7.svg", {
        x: 44.44603000000001,
        y: 5.613102766892268
      }),
      new Costume("costume2", "./Sprite14/costumes/costume2.svg", {
        x: 47.28571449931175,
        y: 9.743788509581492
      })
    ];

    this.sounds = [new Sound("1911-2", "./Sprite14/sounds/1911-2.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "blobby" },
        this.whenIReceiveBlobby
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "blobby" },
        this.whenIReceiveBlobby2
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.goto(-95, 37);
  }

  *whenIReceiveBlobby() {
    this.visible = true;
    while (true) {
      if (this.stage.vars.hp < 1) {
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

  *whenIReceiveBlobby2() {
    while (!(this.stage.vars.hp < 1)) {
      null;
      yield;
    }
    /* TODO: Implement stop other scripts in sprite */ null;
    this.costume = "costume2";
    /* TODO: Implement stop all */ null;
  }
}
