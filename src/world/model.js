import * as THREE from 'three';

// src
import Experience from '../experience.js';

export default class Model {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.setBoard();
    this.setChecker();

    console.log(this.scene.children[4]);
  }

  setBoard() {
    const boardGeometry = new THREE.BoxGeometry(1, 0.5, 1);
    const boardLightMaterial = new THREE.MeshStandardMaterial({
      color: 0xa17639,
    });
    const boardDarkMaterial = new THREE.MeshStandardMaterial({
      color: 0x371509,
    });

    this.board = new THREE.Group();

    let divisions = 8;
    let meshNumber = 1;

    for (let rows = 0; rows < divisions; rows++) {
      for (let cols = 0; cols < divisions; cols++) {
        let boardMesh = new THREE.Mesh(
          boardGeometry,
          (rows + cols) % 2 === 0 ? boardLightMaterial : boardDarkMaterial
        );
        boardMesh.userData.meshNumber = meshNumber;
        meshNumber++;
        boardMesh.position.set(-3.5 + rows, -0.25, -3.5 + cols);
        boardMesh.receiveShadow = true;
        boardMesh.castShadow = true;

        this.board.add(boardMesh);
      }
    }

    this.board.castShadow = true;
    this.board.receiveShadow = true;

    this.scene.add(this.board);
  }

  setChecker() {
    const checkerGeometry = new THREE.CylinderGeometry(0.4, 0.4, 0.25, 32);
    const checkerLightMaterial = new THREE.MeshStandardMaterial({
      color: 0x6b0808,
    });
    const checkerDarkMaterial = new THREE.MeshStandardMaterial({
      color: 0x1f2524,
    });

    this.checker = new THREE.Group();

    for (let rows = 0; rows < 8; rows++) {
      for (let cols = 0; cols < 8; cols++) {
        if (cols < 3) {
          if ((rows + cols) % 2 === 0) {
            let checkerMesh = new THREE.Mesh(
              checkerGeometry,
              checkerLightMaterial
            );
            checkerMesh.position.x = -3.5 + rows;
            checkerMesh.position.z = -3.5 + cols;
            checkerMesh.position.y = 0.125;
            checkerMesh.receiveShadow = true;
            checkerMesh.castShadow = true;

            this.checker.add(checkerMesh);
          }
        }
        if (cols > 4) {
          if ((rows + cols) % 2 !== 0) {
            let checkerMesh = new THREE.Mesh(
              checkerGeometry,
              checkerDarkMaterial
            );
            checkerMesh.position.x = -3.5 + rows;
            checkerMesh.position.z = -3.5 + cols;
            checkerMesh.position.y = 0.125;
            checkerMesh.receiveShadow = true;
            checkerMesh.castShadow = true;

            this.checker.add(checkerMesh);
          }
        }
      }
    }

    this.scene.add(this.checker);
  }

  resize() {}

  update() {}
}
