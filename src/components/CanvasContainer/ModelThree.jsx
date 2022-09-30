import React from 'react'
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Earth from '../Earth/Earth';
import EarthMob from '../Earth/EarthMob';
import './ModelThree.css'
import Loading from '../Loading/Loading';


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
        <Suspense fallback={Loading}>
          <Earth className="earthModel"/>


        </Suspense>
      </Canvas>
    </CanvasContainer>
    <CanvasContainer className='CanvasContainer' id="CanvasMobile">
      <Canvas>
        <Suspense fallback={Loading}>
          <EarthMob className="earthModel"/>


        </Suspense>
      </Canvas>
    </CanvasContainer>
    </>
  )
}


export default ModelThree;

