import * as THREE from 'three';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';

// src
import Experience from '../experience.js';

export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.camera = this.experience.camera;
    this.renderer = this.experience.renderer;
    this.canvas = this.experience.canvas;

    this.setSunlight();
    // this.setPointLight();
    // this.setTransformControls(this.pointLight);
  }

  setSunlight() {
    this.sunLight = new THREE.DirectionalLight('#ffffff', 0.05);
    this.sunLight.castShadow = false;
    this.sunLight.shadow.camera.far = 20;
    this.sunLight.shadow.mapSize.set(1024, 1024);
    this.sunLight.shadow.normalBias = 0.05;
    this.sunLight.position.set(0, 20, 0);
    this.scene.add(this.sunLight);

    // this.ambientLight = new THREE.AmbientLight('#ffffff', 1);
    // this.scene.add(this.ambientLight);
    // let helper = new THREE.CameraHelper(this.sunLight.shadow.camera);
    // this.scene.add(helper);
  }

  setPointLight() {
    this.pointLight = new THREE.PointLight('#ffffff', 5);
    this.pointLight.position.y = 1;
    this.scene.add(this.pointLight);
  }

  setTransformControls(light) {
    this.transformControls = new TransformControls(
      this.camera.perspectiveCamera,
      this.canvas
    );
    this.transformControls.attach(light);
    this.transformControls.addEventListener('dragging-changed', () => {
      this.camera.orbitControls.enabled = !this.camera.orbitControls.enabled;
    });

    this.scene.add(this.transformControls);
  }

  resize() {}

  update() {}
}
