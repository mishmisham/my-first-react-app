import React, {
  Suspense,
  useRef,
  useState,
  useMemo,
  useEffect
} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Sky, Billboard } from '@react-three/drei';
import { BallCollider, Physics, RigidBody, CylinderCollider } from "@react-three/rapier";
import * as THREE from 'three';
import { useControls } from 'leva'

import LightsComponent from './parts/LightsComponent'
import EffectsComponent from './parts/EffectsComponent'

import FingersComponent from './components/fingers/FingersComponent'
import RocksComponent from './components/rocks/RocksComponent'
import Terrain from './components/Terrain'
import Ocean from './components/Ocean'


export default function TestWebGLComponent({pointers}) {

  const camera = useRef(null);

  // if (props.handCoords?.landmarks?.length) {
  //   console.log(props.handCoords?.landmarks)
  // }

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log(camera)

  //   }, 1000)
  // }, [camera])
  

  // const checkClick = (e) => {
  //   const { clientX, clientY, target } = e;
  //   const { x, y, width, height } = target.getBoundingClientRect();
  //   const xEvt = clientX - x;
  //   const yEvt = clientY - y;

  //   // const coords = createVector(xEvt, yEvt, 0, camera.current, width, height);
  //   // console.log(coords)
  // }
  
  const orbit = useRef(null)

  return (
    <div style={{height: '354px'}}>
      <Canvas
        shadows
      >
        <Suspense fallback={null}>

          <PerspectiveCamera
            ref={camera}
            makeDefault
            position={[0, 8, 7]}
          />


          <Physics
            // interpolation={false}
            // colliders={false}
            gravity={[0, -10, 0]}
            timeStep={1 / 10}
          >

              {/* <RocksComponent /> */}

              {/* <Ocean /> */}
              
              {/* <Terrain /> */}

          </Physics>


        <Billboard>

          <FingersComponent
            pointers={pointers}
            orbit={orbit?.current}
          />

        </Billboard>


          <LightsComponent />
          <EffectsComponent />
          <OrbitControls
            ref={orbit}
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            enableDamping={true}
          />
        </Suspense>
      </Canvas>

   
    </div>

  )
}