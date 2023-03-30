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
    this.resources = this.experience.resources;

    this.setPlane();
    this.animatePlane();
  }

  setPlane() {
    this.geometry = new THREE.PlaneGeometry(1, 1, 25, 25);
    this.material = new THREE.ShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        uTime: {
          type: 'f',
          value: 0.0,
        },
        uTexture: {
          value: this.resources.items.planeTexture,
        },
        uProg: {
          type: 'f',
          value: 1.0,
        },
      },
      wireframe: false,
      side: THREE.DoubleSide,
    });
    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.plane);
  }

  animatePlane() {
    this.plane.material.uniforms.uTime.value = this.time.elapsed * 0.001;
  }

  resize() {}

  update() {
    this.animatePlane();
  }

  cursorMove() {}
}
