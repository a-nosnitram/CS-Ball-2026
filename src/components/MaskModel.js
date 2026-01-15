import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

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

// Preload the mask model
useGLTF.preload(`${process.env.PUBLIC_URL}/masks/venetian_jester_mask.glb`);

export default MaskModel;
