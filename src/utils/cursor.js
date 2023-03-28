import { EventEmitter } from 'events';

// src
import Experience from '../experience.js';

export default class Cursor extends EventEmitter {
  constructor() {
    super();
    this.experience = new Experience();
    this.sizes = this.experience.sizes;

    this.position = { x: 0.5, y: 0.5 };

    window.addEventListener('mousemove', (e) => {
      this.position.x = e.clientX / this.sizes.width;
      this.position.y = 1 - e.clientY / this.sizes.height;

      this.emit('cursorMove');
    });
  }
}
