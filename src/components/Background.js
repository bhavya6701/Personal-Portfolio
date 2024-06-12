"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RenderPass } from "/node_modules/three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "/node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { EffectComposer } from "/node_modules/three/examples/jsm/postprocessing/EffectComposer.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

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

function addStar(scene) {
  const geometry = new THREE.SphereGeometry(0.2, 30, 25);
  const material = new THREE.MeshStandardMaterial({
    color: star_color_shades[Math.floor(Math.random() * 8)],
  });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

export default function Background() {
  const refContainer = useRef(null);
  useEffect(() => {
    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    var renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.render(scene, camera);

    // Bloom renderer
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

    // Bloom composer
    const bloomComposer = new EffectComposer(renderer);
    bloomComposer.setSize(window.innerWidth, window.innerHeight);
    bloomComposer.renderToScreen = true;
    bloomComposer.addPass(renderScene);
    bloomComposer.addPass(bloomPass);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;

    // Stars
    Array(500)
      .fill()
      .forEach(() => addStar(scene));

    camera.position.z = 5;
    const orbitRadius = 25;
    let horizontalAngle = 0;
    let verticalAngle = Math.PI / 4;

    var animate = function () {
      horizontalAngle += 0.0005;
      verticalAngle += 0.00025;

      camera.position.x = Math.sin(horizontalAngle) * orbitRadius;
      camera.position.y = Math.sin(verticalAngle) * orbitRadius;
      camera.position.z = Math.cos(horizontalAngle) * orbitRadius;

      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
      bloomComposer.render();
    };

    refContainer.current &&
      refContainer.current.appendChild(renderer.domElement);
    animate();
  }, []);

  const canvasStyle = {
    position: "fixed",
    zIndex: -1,
  };

  return <div ref={refContainer} style={canvasStyle}></div>;
}
