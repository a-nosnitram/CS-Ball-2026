import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import MaskModel from "./MaskModel";
import "./HeroSection.css";

function HeroSection({ mousePosition, onLoaded, onLearnMoreClick }) {
  return (
    <section className="hero-section" data-logo-color="hidden">
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
            <MaskModel mousePosition={mousePosition} onLoaded={onLoaded} />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>

      <div className="header-content">
        <h1>Subnet Mask [array] de</h1>
        <p>April 4th - Upper and Lower College Hall</p>
      </div>

      <button className="learn-more-btn" onClick={onLearnMoreClick}>
        Learn More
        <span className="arrow">↓</span>
      </button>
    </section>
  );
}

export default HeroSection;
