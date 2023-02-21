import * as THREE from 'three';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';

// src
import Experience from '../experience.js';

export default class Model {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.camera = this.experience.camera;
    this.canvas = this.experience.canvas;
    this.renderer = this.experience.renderer;
    this.resources = this.experience.resources;

    this.setControllableBox();
    this.setTransformControls();
    this.setEventListener();
  }

  setControllableBox() {
    let boxGeo = new THREE.BoxGeometry(2, 2, 2);
    let boxMat = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.5,
    });

    this.box = new THREE.Mesh(boxGeo, boxMat);
    this.box.position.set(0, 1, 0);
    this.scene.add(this.box);
  }

  setTransformControls() {
    this.transformControls = new TransformControls(
      this.camera.perspectiveCamera,
      this.canvas
    );
    this.transformControls.attach(this.box);

    this.transformControls.addEventListener('dragging-changed', (event) => {
      this.camera.orbitControls.enabled = !event.value;
    });

    this.transformControls.addEventListener('change', () => {
      this.renderer.setRenderer();
    });

    this.scene.add(this.transformControls);
  }

  setEventListener() {
    window.addEventListener('keydown', (event) => {
      console.log(event.code);
      switch (event.code) {
        case 'KeyR':
          this.transformControls.setMode('rotate');
          break;
        case 'KeyS':
          this.transformControls.setMode('scale');
          break;
        case 'KeyT':
          this.transformControls.setMode('translate');
          break;
        case 'KeyX':
          this.transformControls.showX = !this.transformControls.showX;
          break;
        case 'KeyY':
          this.transformControls.showY = !this.transformControls.showY;
          break;
        case 'KeyZ':
          this.transformControls.showZ = !this.transformControls.showZ;
          break;
      }
    });
  }

  resize() {}

  update() {}
}
