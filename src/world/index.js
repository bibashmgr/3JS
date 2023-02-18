// src
import Experience from '../experience.js';

export default class World {
  constructor() {
    this.experience = new Experience();
    this.resources = this.experience.resources;

    this.resources.on('ready', () => {
      console.log('Resources loaded');
    });
  }

  resize() {}

  update() {}
}
