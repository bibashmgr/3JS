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
    this.animatePlane();
  }

  setPlane() {
    this.geometry = new THREE.PlaneGeometry(10, 10, 100, 100);
    this.material = new THREE.RawShaderMaterial({
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      uniforms: {
        uTime: { type: 'f', value: 0 },
        uHue: { type: 'f', value: 0.56 },
        uHueVariation: { type: 'f', value: 0 },
        uDensity: { type: 'f', value: 0.75 },
        uDisplacement: { type: 'f', value: 0.75 },
        uCursorPosition: { type: 'v2', value: new THREE.Vector2(0.5, 0.5) },
      },
      wireframe: false,
      side: THREE.DoubleSide,
    });
    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.plane);
  }

  animatePlane() {
    this.plane.material.uniforms.uTime.value = this.time.elapsed * 0.003;
  }

  resize() {}

  update() {
    this.animatePlane();
  }

  cursorMove() {
    this.plane.material.uniforms.uCursorPosition.value = new THREE.Vector2(
      this.cursor.position.x,
      this.cursor.position.y
    );
  }
}
