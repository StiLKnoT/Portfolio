import React from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from 'three'
import EathDayMap from "../../textures/8k_earth-daymap.png";
import EathCloudsMap from "../../textures/CloudsMobile.jpg";
import EathNormaMap from "../../textures/8k_earth_normal_map.jpg";
import EathSpecularMap from "../../textures/8k_earth_specular_map.jpg";
import { useRef } from "react";

function Earth() {
  const [colorMap, normaMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EathDayMap, EathNormaMap, EathSpecularMap, EathCloudsMap]
  );
  const earthRef = useRef();
  const clouseRef = useRef();

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        earthRef.current.rotation.y = elapsedTime / 6;
        clouseRef.current.rotation.y = elapsedTime /6;
    })
  return (
    <>
      {/* <ambientLight intensity={1} /> */}
      <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={2.5} />
      
      <Stars 
        radius={300}
        depth={60}
        count={10000}
        factor={7}
        saturation={0}
        fade={true}
        />
      <mesh ref={clouseRef} position={[0, 0, 2.78]}>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
            map={cloudsMap}
            opacity={0.4}
            depthWrite={true}
            transparent={true}
            side={THREE.DoubleSide}
        />

        
      </mesh>
      <mesh ref={earthRef} position={[0, 0, 2.78]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normaMap} metalness={0.4} roughness={0.7} />
        {/* <OrbitControls
          enableZoom={false}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        /> */}
      </mesh>
    </>
  );
}

export default Earth;
