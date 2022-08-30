import * as THREE from 'three';

// Custom-styling
import './style.css';

// We need three things: scene, camera and renderer, so that we can render the scene with camera.

// 1. Scene
// Creating an scene instance
const scene = new THREE.Scene();

// 2. Camera
// There are a few different cameras in three.js. For now, let's use a PerspectiveCamera. It takes four parameters: field of view, aspect ratio, near cliping plane and far clipping plane.

// Creating an camera instance
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
// Adjusting camera position
camera.position.z = 5;

// 3. Renderer
// Creating a renderer instance
const renderer = new THREE.WebGLRenderer();

// Setting the size at which it will render the app
renderer.setSize(window.innerWidth, window.innerHeight);

// Appending to HTML body
document.body.appendChild(renderer.domElement);

// Creating a cube
const geometry = new THREE.BoxGeometry(1, 1, 1); // modeling
const material = new THREE.MeshBasicMaterial({ color: 0xf75aa8 }); // texturing
const cube = new THREE.Mesh(geometry, material);

// Adding cube to the scene
scene.add(cube);

// A function to animate the scene
const animate = () => {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();
