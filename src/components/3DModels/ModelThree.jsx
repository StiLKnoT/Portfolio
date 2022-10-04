import React from 'react'
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Earth from '../3DModels/Earth';
import EarthMob from '../3DModels/EarthMob';
import './ModelThree.css'
import { Loader } from '@react-three/drei';


const CanvasContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absoulute
`;

function ModelThree() {
  return (
    <>
    <CanvasContainer className='CanvasContainer' id='CanvasDesktop'>
      <Canvas>
        <Suspense fallback={null}>
          <Earth className="earthModel"/>
        </Suspense>
      </Canvas>
      <Loader className="loader"/>

    </CanvasContainer>
    <CanvasContainer className='CanvasContainer' id="CanvasMobile">
      <Canvas>
        <Suspense fallback={null}>
          <EarthMob className="earthModel"/>
        </Suspense>
      </Canvas>
      <Loader className="loader"/>

    </CanvasContainer>
    </>
  )
}


export default ModelThree;

