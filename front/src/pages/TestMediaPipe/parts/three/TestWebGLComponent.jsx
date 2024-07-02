import React, {
  Suspense,
  useRef,
  useState,
  useMemo,
  useEffect
} from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Sky, Billboard } from '@react-three/drei';
import { BallCollider, Physics, RigidBody, CylinderCollider } from "@react-three/rapier";
import * as THREE from 'three';
import { useControls } from 'leva'

import LightsComponent from './parts/LightsComponent'
import EffectsComponent from './parts/EffectsComponent'
import CameraComponent from './parts/CameraComponent'

import FingersComponent from './components/fingers/FingersComponent'
import RocksComponent from './components/rocks/RocksComponent'
import Terrain from './components/Terrain'
// import Ocean from './components/Ocean'

              // {/* <Ocean /> */}
           

export default function TestWebGLComponent({pointers, width, height}) {

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isKeyPressed, setIsKeyPressed] = useState(false);
  const [keyCode, setKeyCode] = useState('');

  const setMouseDown = (value) => {
    setIsMouseDown(value);
  }

  const setKeyPressed = (isPressed, value) => {
    setIsKeyPressed(isPressed);
    setKeyCode(value);
  }

  const onKeyPress = (e) => {
    setKeyPressed(true, e.keyCode)
  }

  const onKeyUp = (e) => {
    setKeyPressed(false, '')
  }

  if (typeof window !== undefined) {
    document.addEventListener('keydown', onKeyPress)
    document.addEventListener('keyup', onKeyUp)
  }

  return (
    <div style={{height: height+'px'}}>
      <Canvas
        shadows
        onMouseDown={e=>setMouseDown(true)}
        onMouseUp={e=>setMouseDown(false)}
        onMouseLeave={e=>setMouseDown(false)}
      >
        <Suspense fallback={null}>

          <CameraComponent 
            isMouseDown={isMouseDown}
            isKeyPressed={isKeyPressed}
            keyCode={keyCode}
            width={width}
            height={height}
            position={[0,0,0]}
            rotation={[0,0,0]}
          />

          <Physics
            gravity={[0, -10, 0]}
            timeStep={1 / 10}
          >

              <RocksComponent />
   
              <Terrain />

          </Physics>

          <FingersComponent
            pointers={pointers}
            distance={2}
          />

          <LightsComponent />
          <EffectsComponent />
          {/* <OrbitControls
            ref={orbit}
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            enableDamping={true}
          /> */}
        </Suspense>
      </Canvas>

   
    </div>

  )
}