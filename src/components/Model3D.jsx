import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

function Model({ url }) {
    const { scene } = useGLTF(url);

    // Preserve original materials but enhance their properties
    scene.traverse((child) => {
        if (child.isMesh) {
            // Keep original color but enhance material properties
            const originalColor = child.material.color.clone();
            child.material = child.material.clone(); // Clone to avoid sharing materials
            child.material.color = originalColor;
            child.material.roughness = 0.9;
            child.material.metalness = 0.1;
            child.material.envMapIntensity = 1;
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });

    return (
        <primitive
            object={scene}
            scale={2.2}
            position={[0, -1, 0]}
            rotation={[0, Math.PI, 0]}
        />
    );
}

const Model3D = ({ modelPath }) => {
    return (
        <div className="relative w-[400px] h-[400px] bg-black">
            {/* Glass effect container with enhanced gradient background */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden bg-black">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black/90 to-blue-900/30 animate-gradient" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.8)_100%)]" />
                <div className="absolute inset-0 backdrop-blur-sm" />

                {/* Enhanced glass reflections */}
                <div className="absolute inset-0">
                    {/* Top light reflection */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                    {/* Left light reflection */}
                    <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-white/30 via-white/20 to-transparent" />

                    {/* Diagonal glare effect */}
                    <div className="absolute -top-[100%] -left-[100%] w-[200%] h-[200%] bg-gradient-to-br from-white/10 via-transparent to-transparent rotate-45" />
                </div>
            </div>

            <Canvas
                camera={{ position: [0, 0, 8], fov: 45 }}
                dpr={window.devicePixelRatio}
                shadows
            >
                <color attach="background" args={['#000000']} />

                {/* Lighting setup */}
                <ambientLight intensity={0.8} />

                {/* Main front light */}
                <directionalLight
                    position={[5, 5, 5]}
                    intensity={0.8}
                    castShadow
                />

                {/* Side lights for depth */}
                <pointLight
                    position={[-3, 1, 3]}
                    intensity={0.3}
                    color="#ffffff"
                />
                <pointLight
                    position={[3, 1, 3]}
                    intensity={0.3}
                    color="#ffffff"
                />

                {/* Bottom rim light */}
                <pointLight
                    position={[0, -2, 3]}
                    intensity={0.2}
                    color="#ffffff"
                />

                <Suspense fallback={null}>
                    <Model url={modelPath} />
                </Suspense>

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                    autoRotate
                    autoRotateSpeed={-20.5}
                    enableDamping={true}
                    dampingFactor={0.05}
                />
            </Canvas>

            {/* Enhanced typing effect text with glow */}
            <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2">
                <h2
                    className="text-transparent bg-clip-text text-2xl font-bold"
                    style={{
                        animation: 'typing 3.5s steps(10, end) infinite, blink-caret .75s step-end infinite',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        borderRight: '.15em solid #9333EA',
                        background: 'linear-gradient(to right, #9333EA, #6366F1, #8B5CF6, #9333EA)',
                        backgroundSize: '200% 100%',
                        WebkitBackgroundClip: 'text',
                        filter: 'drop-shadow(0 0 8px rgba(147, 51, 234, 0.6))',
                        width: 'fit-content',
                        margin: '0 auto'
                    }}
                >
                    BotOverload
                </h2>
            </div>
        </div>
    );
};

// Updated animation styles
const styles = `
    @keyframes typing {
        0%, 100% { width: 0 }
        50% { width: 100% }
    }

    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: #9333EA }
    }

    @keyframes gradient {
        0% { 
            background-position: 0% 50%;
            opacity: 0.5;
        }
        50% { 
            background-position: 100% 50%;
            opacity: 0.8;
        }
        100% { 
            background-position: 0% 50%;
            opacity: 0.5;
        }
    }

    .animate-gradient {
        animation: gradient 8s ease infinite;
        background-size: 200% 200%;
    }
`;

// Make sure the styles are added to the document
if (!document.getElementById('model3d-styles')) {
    const styleSheet = document.createElement("style");
    styleSheet.id = 'model3d-styles';
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}

export default Model3D;

useGLTF.preload('/models/model.glb'); 