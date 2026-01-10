import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import "./App.css";

function MaskModel({ mousePosition }) {
  const { scene } = useGLTF("/masks/venetian_jester_mask.glb");
  const meshRef = useRef();

  // make materials opaque bc they load as transparent for some reason
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.transparent = false;
      child.material.opacity = 1;
      child.material.depthWrite = true;
      child.material.side = 2;
      child.material.needsUpdate = true;
    }
  });

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y +=
        (mousePosition.x * 0.5 - meshRef.current.rotation.y) * 0.05;
      meshRef.current.rotation.x +=
        (-mousePosition.y * 0.3 - meshRef.current.rotation.x) * 0.05 - 0.01;
    }
  });

  return (
    <primitive
      ref={meshRef}
      object={scene}
      scale={2.5}
      position={[0, -0.5, 0]}
    />
  );
}

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: -(event.clientY / window.innerHeight) * 2 + 1,
    });
  };

  const scrollToNextSection = () => {
    document
      .getElementById("about-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <section className="hero-section">
        <div className="canvas-container">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 50 }}
            gl={{ alpha: true, antialias: true }}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                intensity={1}
              />
              <pointLight position={[-10, -10, -10]} intensity={0.5} />
              <MaskModel mousePosition={mousePosition} />
              <Environment preset="city" />
            </Suspense>
          </Canvas>
        </div>

        <div className="header-content">
          <h1>Mask [array] de</h1>
          <p>This is CS ball and it's a masquerade</p>
        </div>

        <button className="learn-more-btn" onClick={scrollToNextSection}>
          Learn More
          <span className="arrow">↓</span>
        </button>
      </section>

      <section id="about-section" className="about-section">
        <div className="about-content">
          <h2>Info about CS BAll</h2>
          <p>
            sdbd edhebdhf hadbsad jfjjfg jsdb dhd qasjfjds ajbdj sjs dasjsd
            asdjsabjd dajldas dsajds djf dhej paa dpw pc apdscmed odfpamw pd
            wpqldnd...
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
