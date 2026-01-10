import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF, Html } from "@react-three/drei";
import "./App.css";

function MaskModel({ mousePosition, onLoaded }) {
  const { scene } = useGLTF(
    `${process.env.PUBLIC_URL}/masks/venetian_jester_mask.glb`
  );
  const meshRef = useRef();

  useEffect(() => {
    if (scene && onLoaded) {
      onLoaded();
    }
  }, [scene, onLoaded]);

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
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleLoaded = () => {
    setFadeOut(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1200); // Match CSS transition duration
  };

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
    <>
      {isLoading && (
        <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
          <div className="loading-content">
            <h1>maskARRAYde</h1>
            <div className="loading-spinner"></div>
            <p>The 3d object takes time to render lol...</p>
            <p className="loading-subtext">
              will have to come up with a better loading screen message
            </p>
          </div>
        </div>
      )}
      <div className="App" onMouseMove={handleMouseMove}>
        <section className="hero-section">
          <div className="canvas-container">
            <Canvas
              camera={{ position: [0, 0, 5], fov: 50 }}
              gl={{ alpha: true, antialias: true }}
            >
              <Suspense>
                <ambientLight intensity={0.5} />
                <spotLight
                  position={[10, 10, 10]}
                  angle={0.15}
                  penumbra={1}
                  intensity={1}
                />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />
                <MaskModel
                  mousePosition={mousePosition}
                  onLoaded={handleLoaded}
                />
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
    </>
  );
}

// Preload the mask model
useGLTF.preload(`${process.env.PUBLIC_URL}/masks/venetian_jester_mask.glb`);

export default App;
