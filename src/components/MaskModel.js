import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function MaskModel({ mousePosition, onLoaded }) {
  const { scene } = useGLTF(
    `${process.env.PUBLIC_URL}/masks/venetian_jester_mask.glb`,
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

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Check if mobile device
      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
        // Gentle floating animation for mobile
        meshRef.current.rotation.y =
          Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
        meshRef.current.rotation.x =
          Math.cos(clock.getElapsedTime() * 0.2) * 0.1 - 0.2;
        meshRef.current.position.y =
          Math.sin(clock.getElapsedTime() * 0.5) * 0.1 - 0.3;
        meshRef.current.position.x = 0;
        meshRef.current.position.z = 0;
      } else {
        // Mouse tracking for desktop
        meshRef.current.rotation.y +=
          (mousePosition.x * 0.5 - meshRef.current.rotation.y) * 0.05;
        meshRef.current.rotation.x +=
          (-mousePosition.y * 0.3 - meshRef.current.rotation.x) * 0.05 - 0.01;
        meshRef.current.position.x = 0;
        meshRef.current.position.y = -0.5;
        meshRef.current.position.z = 0;
      }
    }
  });

  // Determine scale based on screen size
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
  const isSmallMobile =
    typeof window !== "undefined" && window.innerWidth <= 480;
  const modelScale = isSmallMobile ? 1.2 : isMobile ? 1.5 : 2.5;

  return (
    <primitive
      ref={meshRef}
      object={scene}
      scale={modelScale}
      position={[0, -0.5, 0]}
    />
  );
}

// Preload the mask model
useGLTF.preload(`${process.env.PUBLIC_URL}/masks/venetian_jester_mask.glb`);

export default MaskModel;
