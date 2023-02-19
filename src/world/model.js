import * as THREE from 'three';

// src
import Experience from '../experience.js';

export default class Model {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    console.log(this.resources);

    this.model = this.resources.items.model;
    this.actualModel = this.model.scene;

    // this.setBox();
    this.setFloor();
    this.setModel();
    // this.setBoxAnimation();
    this.setModelAnimation();
  }

  setBox() {
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    const boxMaterial = new THREE.MeshNormalMaterial();
    this.boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    this.scene.add(this.boxMesh);
    this.boxMesh.position.y = 1;
    this.boxMesh.castShadow = true;
    this.boxMesh.receiveShadow = true;
  }

  setModel() {
    this.actualModel.children.forEach((child) => {
      child.castShadow = true;
      child.receiveShadow = true;

      if (child instanceof THREE.Group) {
        child.children.forEach((groupChild) => {
          groupChild.castShadow = true;
          groupChild.receiveShadow = true;
        });
      }
    });

    this.scene.add(this.actualModel);
    this.actualModel.scale.set(0.5, 0.5, 0.5);
    this.actualModel.position.y = 1;
    this.actualModel.castShadow = true;
    this.actualModel.receiveShadow = true;
  }

  setFloor() {
    this.geometry = new THREE.PlaneGeometry(10, 10);
    this.material = new THREE.MeshStandardMaterial({
      color: 0xffe6a2,
      side: THREE.BackSide,
    });
    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.plane);
    this.plane.rotation.x = Math.PI / 2;
    this.plane.receiveShadow = true;
  }

  setBoxAnimation() {
    this.boxMesh.rotation.x += 0.01;
    this.boxMesh.rotation.y += 0.01;
    this.boxMesh.rotation.z += 0.01;
  }

  setModelAnimation() {
    this.actualModel.rotation.x += 0.01;
    this.actualModel.rotation.y += 0.01;
    this.actualModel.rotation.z += 0.01;
  }

  resize() {}

  update() {
    // this.setBoxAnimation();
    this.setModelAnimation();
  }
}
