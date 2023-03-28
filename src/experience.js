import * as THREE from 'three';

// src
import Camera from './camera.js';
import Renderer from './renderer.js';

// utils
import Sizes from './utils/sizes.js';
import Time from './utils/time.js';
import Resources from './utils/resources.js';
import Cursor from './utils/cursor.js';

// config
import assets from './config/assets.js';

// world
import World from './world/world.js';

export default class Experience {
  static instance;

  constructor(canvas) {
    if (Experience.instance) {
      return Experience.instance;
    }

    Experience.instance = this;
    this.canvas = canvas;
    this.scene = new THREE.Scene();
    this.sizes = new Sizes();
    this.time = new Time();
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.resources = new Resources(assets);
    this.cursor = new Cursor();

    this.world = new World();

    this.sizes.on('resize', () => {
      this.resize();
    });
    this.time.on('update', () => {
      this.update();
    });
    this.cursor.on('cursorMove', () => {
      this.cursorMove();
    });
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
  }

  update() {
    this.camera.update();
    this.renderer.update();
    this.world.update();
  }

  cursorMove() {
    this.world.cursorMove();
  }
}
