"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RenderPass } from "/node_modules/three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "/node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { EffectComposer } from "/node_modules/three/examples/jsm/postprocessing/EffectComposer.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Star colors in shades of blue
const star_color_shades = [
    "#FFA500", // Deeper orange
    "#FFAE1A",
    "#FFB833",
    "#FFC14D",
    "#FFCA66",
    "#FFD480",
    "#FFDD99",
    "#FFE6B3",
    "#FFF0CC", // Lightest orange
];

export default function Background() {
    // Reference to the container element
    const refContainer = useRef(null);
    const stars = [];

    // Function to add stars to the background
    function addStar(scene) {
        // Create a star
        const geometry = new THREE.SphereGeometry(0.2, 30, 25);
        const random_color = star_color_shades[Math.floor(Math.random() * 8)];
        const material = new THREE.MeshStandardMaterial({
            color: random_color,
            emissive: new THREE.Color(random_color), // or any color you want as the "glow"
            emissiveIntensity: 0.0, // start at 0 for no glow
        });

        const star = new THREE.Mesh(geometry, material);

        // Randomly position the star
        const [x, y, z] = Array(3)
            .fill()
            .map(() => THREE.MathUtils.randFloatSpread(100));

        star.position.set(x, y, z);

        // Give each star its own flicker frequency & phase offset
        star.userData.flickerFrequency = 2 + Math.random() * 3; // between 2 to 5
        star.userData.phaseOffset = Math.random() * Math.PI * 2; // between 0 to 2π
        star.userData.flickerPhase = Math.random() * Math.PI * 2;

        // Each star also has its own "scale" frequency and offset
        // so they vary in size over time
        star.userData.scaleFrequency =  Math.random() * 2; // ~1 to 3
        star.userData.scalePhase = Math.random() * Math.PI * 1.5;
        star.userData.baseScale = 0.5; // the original radius
        star.userData.scaleAmplitude = 0.5; // how big the change is (+/- 0.1)

        // Add the star to the scene
        scene.add(star);
        stars.push(star);
    }

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
            // How much time has passed (in seconds)?
            const time = performance.now() * 0.001;

            // Update the camera position
            horizontalAngle += 0.0005;
            verticalAngle += 0.00025;
            camera.position.x = Math.sin(horizontalAngle) * orbitRadius;
            camera.position.y = Math.sin(verticalAngle) * orbitRadius;
            camera.position.z = Math.cos(horizontalAngle) * orbitRadius;

            stars.forEach((star) => {
                // Emissive flicker
                const freqE = star.userData.flickerFrequency;
                const phaseE = star.userData.flickerPhase;
                star.material.emissiveIntensity =
                    0.25 + 0.25 * Math.sin(freqE * time + phaseE);

                // Scale flicker
                const freqS = star.userData.scaleFrequency;
                const phaseS = star.userData.scalePhase;
                const baseScale = star.userData.baseScale;
                const amp = star.userData.scaleAmplitude;
                const scaleValue =
                    baseScale + amp * Math.sin(freqS * time + phaseS);
                star.scale.setScalar(scaleValue);
            });

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
