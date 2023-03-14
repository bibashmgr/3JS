import * as THREE from 'three';

// src
import Experience from '../experience.js';

export default class Model {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.setFloor();
    this.setLightBulb();
  }

  setFloor() {
    const floorGeometry = new THREE.BoxGeometry(25, 0.5, 25);
    const floorMaterial = new THREE.MeshStandardMaterial({
      color: 0xaabbcc,
    });

    this.floor = new THREE.Mesh(floorGeometry, floorMaterial);

    this.floor.castShadow = true;
    this.floor.receiveShadow = true;

    this.scene.add(this.floor);
  }

  setLightBulb() {
    let intensity = 1;

    let lightBulb = new THREE.Group();

    // bulb-sphere
    let bulbSphereGeo = new THREE.SphereGeometry(0.5, 32, 32);
    let bulbSphereLight = new THREE.PointLight(0xffee88, 1, 100, 2);
    let bulbSphereMat = new THREE.MeshStandardMaterial({
      emissive: 0xffffff,
      emissiveIntensity: intensity,
      color: 0xffffee,
      roughness: 1,
    });
    bulbSphereLight.add(new THREE.Mesh(bulbSphereGeo, bulbSphereMat));
    bulbSphereLight.position.set(0, 0, 0);
    bulbSphereLight.castShadow = true;

    // bulb-stem
    let bulbStemGeo = new THREE.CylinderGeometry(0.25, 0.3125, 0.3, 32);
    let bulbStemMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xffffff,
      emissiveIntensity: intensity,
      metalness: 0.8,
      roughness: 0,
    });

    let bulbStem = new THREE.Mesh(bulbStemGeo, bulbStemMat);
    bulbStem.position.set(0, 0.5, 0);
    bulbStem.castShadow = true;
    bulbStem.receiveShadow = true;

    //blub-plug
    let bulbPlugGeo = new THREE.CylinderGeometry(0.25, 0.25, 0.7, 32);
    let bulbPlugMat = new THREE.MeshStandardMaterial({
      color: 0x807d7a,
    });

    let bulbPlug = new THREE.Mesh(bulbPlugGeo, bulbPlugMat);
    bulbPlug.position.set(0, 0.6, 0);
    bulbPlug.receiveShadow = true;
    bulbPlug.castShadow = true;

    //blub-plug-top
    var bulbTopGeo = new THREE.CylinderGeometry(0.125, 0.15, 0.1, 32);
    var bulbTopMat = new THREE.MeshStandardMaterial({
      color: 0x807d7a,
    });
    var bulbTop = new THREE.Mesh(bulbTopGeo, bulbTopMat);
    bulbTop.position.set(0, 1, 0);
    bulbTop.receiveShadow = true;
    bulbTop.castShadow = true;

    //blub-plug-rings
    let bulbRingGeo = new THREE.TorusGeometry(0.26, 0.02, 4, 100);
    let bulbRingMat = new THREE.MeshStandardMaterial({
      color: 0x807d7a,
    });

    let ringY = 0.65;
    for (let i = 0; i < 4; i++) {
      var bulbRing = new THREE.Mesh(bulbRingGeo, bulbRingMat);
      bulbRing.rotation.x = -Math.PI / 2;
      bulbRing.position.set(0, ringY, 0);
      lightBulb.add(bulbRing);

      ringY += 0.1;
    }

    lightBulb.add(bulbSphereLight);
    lightBulb.add(bulbStem);
    lightBulb.add(bulbPlug);
    lightBulb.add(bulbTop);

    lightBulb.position.y = 3;

    this.scene.add(lightBulb);
  }

  resize() {}

  update() {}
}
