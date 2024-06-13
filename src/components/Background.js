"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RenderPass } from "/node_modules/three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "/node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { EffectComposer } from "/node_modules/three/examples/jsm/postprocessing/EffectComposer.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Star colors in shades of blue
const star_color_shades = [
  "#2596be",
  "#3ba1c5",
  "#51abcb",
  "#66b6d2",
  "#7cc0d8",
  "#92cbdf",
  "#a8d5e5",
  "#bee0ec",
  "#d3eaf2",
];

// Function to add stars to the background
function addStar(scene) {
  // Create a star
  const geometry = new THREE.SphereGeometry(0.2, 30, 25);
  const material = new THREE.MeshStandardMaterial({
    color: star_color_shades[Math.floor(Math.random() * 8)],
  });
  const star = new THREE.Mesh(geometry, material);

  // Randomly position the star
  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);

  // Add the star to the scene
  scene.add(star);
}

export default function Background() {
  // Reference to the container element
  const refContainer = useRef(null);

  // Create the background animation
  useEffect(() => {
    // Create the scene, camera, and renderer
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    var renderer = new THREE.WebGLRenderer();

    // Set the renderer size and pixel ratio to match the window
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Render the scene
    renderer.render(scene, camera);

    // Bloom renderer (post-processing effect)
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85
    );
    bloomPass.threshold = 0; //brightness threshold
    bloomPass.strength = 5; //intensity of glow
    bloomPass.radius = 1; //spread of glow

    // Bloom composer (post-processing effect)
    const bloomComposer = new EffectComposer(renderer);
    bloomComposer.setSize(window.innerWidth, window.innerHeight);
    bloomComposer.renderToScreen = true;
    bloomComposer.addPass(renderScene);
    bloomComposer.addPass(bloomPass);

    // Add ambient light to the scene
    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    // Add controls to the camera for orbiting
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;

    // Create stars in the background
    Array(500)
      .fill()
      .forEach(() => addStar(scene));

    // Set the camera position and orbit radius for the animation
    camera.position.z = 5;
    const orbitRadius = 25;
    let horizontalAngle = 0;
    let verticalAngle = Math.PI / 4;

    // Animate the scene
    var animate = function () {
      // Rotate the camera around the scene
      horizontalAngle += 0.0005;
      verticalAngle += 0.00025;

      // Update the camera position
      camera.position.x = Math.sin(horizontalAngle) * orbitRadius;
      camera.position.y = Math.sin(verticalAngle) * orbitRadius;
      camera.position.z = Math.cos(horizontalAngle) * orbitRadius;

      // Update the camera and controls
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
      bloomComposer.render();
    };

    // Add the renderer to the container element and start the animation
    refContainer.current &&
      refContainer.current.appendChild(renderer.domElement);
    animate();
  }, []);

  return <div ref={refContainer} className="canvas-style"></div>;
}
