import * as THREE from 'three';

// src
import Experience from '../experience.js';

// shaders
import vertexShader from '../shaders/vertex_shader.glsl';
import fragmentShader from '../shaders/fragment_shader.glsl';

export default class Model {
  constructor() {
    this.experience = new Experience();
    this.time = this.experience.time;
    this.scene = this.experience.scene;
    this.time = this.experience.time;
    this.cursor = this.experience.cursor;

    this.setPlane();
  }

  setPlane() {
    this.geometry = new THREE.PlaneGeometry(10, 10, 100, 100);
    this.material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {},
      wireframe: true,
      side: THREE.DoubleSide,
    });
    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.plane);
  }

  resize() {}

  update() {}

  cursorMove() {}
}
