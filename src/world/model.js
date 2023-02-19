import * as THREE from 'three';

// src
import Experience from '../experience.js';

export default class Model {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.setBoard();
  }

  setBoard() {
    const boardGeometry = new THREE.BoxGeometry(1, 0.5, 1);
    const boardLightMaterial = new THREE.MeshBasicMaterial({
      color: 0xd9965f,
    });
    const boardDarkMaterial = new THREE.MeshBasicMaterial({
      color: 0x090000,
    });

    this.board = new THREE.Group();

    let divisions = 10;

    for (let rows = 0; rows < divisions; rows++) {
      for (let cols = 0; cols < divisions; cols++) {
        let boardMesh = new THREE.Mesh(
          boardGeometry,
          (rows + cols) % 2 === 0 ? boardLightMaterial : boardDarkMaterial
        );
        boardMesh.position.x = -4.5 + rows;
        boardMesh.position.z = -4.5 + cols;
        boardMesh.position.y = -0.5;
        this.board.add(boardMesh);
      }
    }

    this.scene.add(this.board);
  }

  resize() {}

  update() {}
}
