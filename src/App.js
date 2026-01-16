import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import { useGLTF } from "@react-three/drei";
import "./App.css";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleLoaded = () => {
    setFadeOut(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
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
      {isLoading && <LoadingScreen fadeOut={fadeOut} />}
      <div className="App" onMouseMove={handleMouseMove}>
        <HeroSection
          mousePosition={mousePosition}
          onLoaded={handleLoaded}
          onLearnMoreClick={scrollToNextSection}
        />
        <AboutSection />
      </div>
    </>
  );
}
// Preload the mask model
useGLTF.preload(`${process.env.PUBLIC_URL}/masks/venetian_jester_mask.glb`);

export default App;
