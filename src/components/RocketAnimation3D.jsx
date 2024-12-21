import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap';

const RocketAnimation3D = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x000000, 0.005);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 5, 15);

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000);
        mountRef.current.appendChild(renderer.domElement);

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xff9999, 2);
        pointLight.position.set(0, -5, 0);
        scene.add(pointLight);

        // Create dense smoke particles
        const smokeParticles = [];
        const createSmokeParticle = () => {
            const geometry = new THREE.PlaneGeometry(20, 20);
            const material = new THREE.MeshLambertMaterial({
                color: 0x444444,
                transparent: true,
                opacity: 0.6,
            });

            const particle = new THREE.Mesh(geometry, material);
            particle.position.set(
                Math.random() * 40 - 20,
                Math.random() * 40 - 20,
                Math.random() * 40 - 20
            );
            particle.rotation.z = Math.random() * Math.PI;
            particle.userData = {
                originalY: particle.position.y,
                speed: Math.random() * 0.2 + 0.1,
                opacity: Math.random() * 0.5 + 0.5
            };
            scene.add(particle);
            smokeParticles.push(particle);
        };

        // Create initial dense smoke
        for (let i = 0; i < 200; i++) {
            createSmokeParticle();
        }

        // Load and setup rocket
        const loader = new GLTFLoader();
        let rocket;
        loader.load(
            'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Rocket/glTF/Rocket.gltf',
            (gltf) => {
                rocket = gltf.scene;
                rocket.scale.set(0.5, 0.5, 0.5);
                rocket.position.y = -15;
                rocket.rotation.y = Math.PI / 2;
                scene.add(rocket);

                // Start rocket animation after 3 seconds
                setTimeout(() => {
                    gsap.to(rocket.position, {
                        y: 20,
                        duration: 5,
                        ease: "power1.inOut"
                    });

                    // Gradually clear smoke
                    gsap.to(scene.fog.density, {
                        value: 0.001,
                        duration: 3,
                        ease: "power1.out"
                    });

                    // Reduce smoke opacity
                    smokeParticles.forEach((particle) => {
                        gsap.to(particle.material, {
                            opacity: 0.2,
                            duration: 3,
                            ease: "power1.out"
                        });
                    });
                }, 3000);
            }
        );

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Animate smoke particles
            smokeParticles.forEach((particle) => {
                particle.rotation.z += 0.001;
                particle.position.y += particle.userData.speed;

                if (particle.position.y > 20) {
                    particle.position.y = particle.userData.originalY;
                }
            });

            if (rocket) {
                rocket.rotation.y += 0.01;
            }

            renderer.render(scene, camera);
        };

        animate();

        // Handle window resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current?.removeChild(renderer.domElement);
            scene.clear();
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className="fixed inset-0 z-0  "
            style={{ background: 'linear-gradient(to bottom, #000000, #1a1a1a)' }}
        />
    );
};

export default RocketAnimation3D; 