import React from 'react'
import Mars from './Mars'
import '../Contact/Contact.css'
import { Canvas } from "@react-three/fiber";
import { Suspense } from 'react';



function CanvasMars() {
  return (
    <div className='canvasMars'>
          <Canvas className="canvas" style={{width: "100%"}}>
          {/* <OrbitControls
          enableZoom={false}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />     */}
              <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]}  />
          <Suspense fallback={null}>
            <Mars />
          </Suspense>
        </Canvas>
        {/* <Loader/> */}
      
    </div>
  )
}

export default CanvasMars

