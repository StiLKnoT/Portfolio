import React from 'react'
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from 'react';
import EarthImpo from './EarthImpo';
import '../Service/Service.css'


function CanvasImpo() {
  return (
    <div className='ServiceModel'>
          <Canvas className="canvas" style={{width: "100%"}}>
          {/* <OrbitControls
          enableZoom={false}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />      */}
             <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]}  />
          <Suspense fallback={null}>
            <EarthImpo />
          </Suspense>
        </Canvas>
        {/* <Loader/> */}

      
    </div>
  )
}

export default CanvasImpo
