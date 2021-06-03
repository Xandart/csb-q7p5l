import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite10 from "./Sprite10/Sprite10.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite11 from "./Sprite11/Sprite11.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import Sprite5 from "./Sprite5/Sprite5.js";
import Sprite6 from "./Sprite6/Sprite6.js";
import Sprite7 from "./Sprite7/Sprite7.js";
import Sprite8 from "./Sprite8/Sprite8.js";
import Sprite9 from "./Sprite9/Sprite9.js";
import Sprite12 from "./Sprite12/Sprite12.js";
import Sprite13 from "./Sprite13/Sprite13.js";
import Sprite14 from "./Sprite14/Sprite14.js";
import Sprite15 from "./Sprite15/Sprite15.js";
import Sprite16 from "./Sprite16/Sprite16.js";
import Sprite17 from "./Sprite17/Sprite17.js";
import Sprite18 from "./Sprite18/Sprite18.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Sprite1: new Sprite1({
    x: -204,
    y: 40,
    direction: 90,
    costumeNumber: 6,
    size: 100,
    visible: true,
    layerOrder: 14
  }),
  Sprite10: new Sprite10({
    x: -175,
    y: -74,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 16
  }),
  Sprite3: new Sprite3({
    x: 171,
    y: -14,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  }),
  Sprite2: new Sprite2({
    x: 235,
    y: 42,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  Sprite11: new Sprite11({
    x: 235,
    y: 41,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  Sprite4: new Sprite4({
    x: -8,
    y: 134,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5
  }),
  Sprite5: new Sprite5({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 18
  }),
  Sprite6: new Sprite6({
    x: 248.81328191866788,
    y: 132.4745414936773,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  Sprite7: new Sprite7({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  Sprite8: new Sprite8({
    x: 199,
    y: 66,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 8
  }),
  Sprite9: new Sprite9({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 10
  }),
  Sprite12: new Sprite12({
    x: 82.77675100442065,
    y: 5.274718972458899,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 9
  }),
  Sprite13: new Sprite13({
    x: -11,
    y: 21,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 15
  }),
  Sprite14: new Sprite14({
    x: -95,
    y: 37,
    direction: 90,
    costumeNumber: 1,
    size: 50,
    visible: true,
    layerOrder: 6
  }),
  Sprite15: new Sprite15({
    x: 162.1995600023618,
    y: 5.09237233314661,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 11
  }),
  Sprite16: new Sprite16({
    x: 239.72102061870862,
    y: 4.8011041234500595,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 12
  }),
  Sprite17: new Sprite17({
    x: 323.4355989242886,
    y: 6.532371460248299,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 13
  }),
  Sprite18: new Sprite18({
    x: -9,
    y: -18,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 17
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
