import * as THREE from 'three';

// src
import Experience from '../experience.js';

export default class Model {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
  }

  resize() {}

  update() {}
}
