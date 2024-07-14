import React, {
  Suspense,
  useRef,
  useState,
  useMemo,
  useEffect,
} from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Sky, Billboard } from '@react-three/drei';
import { BallCollider, Physics, RigidBody, CylinderCollider } from "@react-three/rapier";
import * as THREE from 'three';

import LightsComponent from './parts/LightsComponent'
import EffectsComponent from './parts/EffectsComponent'
import CameraComponent from './parts/CameraComponent'

import FingersComponent from './components/fingers/FingersComponent'
import RocksComponent from './components/rocks/RocksComponent'
import Terrain from './components/Terrain'
// import Ocean from './components/Ocean'
// {/* <Ocean /> */}
import KeyboardHandler from '@/mixin/KeyboardHandler'
export default function TestWebGLComponent({pointers, width, height}) {

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isKeyPressed, setIsKeyPressed] = useState(false);
  const [keyCode, setKeyCode] = useState('');
  
  const rocksComponent = useRef(null);

  const getRocksScreenPositions = () => {
    rocksComponent.current.setNeedNewData(true);
  }

  const onGetItems = (rocks) => {
    console.log('rocks', rocks)
  }

  /*
    position={[1,9,12]}
    rotation={[-0.7,-0.2,0]}
  */

  return (
    <>
      <div style={{height: height+'px'}}>
        <Canvas
          shadows
          onMouseDown={e=>setIsMouseDown(true)}
          onMouseUp={e=>setIsMouseDown(false)}
          onMouseLeave={e=>setIsMouseDown(false)}
        >
          <Suspense fallback={null}>

            <CameraComponent 
              isMouseDown={isMouseDown}
              isKeyPressed={isKeyPressed}
              keyCode={keyCode}
              width={width}
              height={height}
              position={[0, 0, 0]}
              rotation={[0, 0, 0]}
            />

            <Physics
              gravity={[0, -10, 0]}
              timeStep={1 / 10}
            >

                <RocksComponent
                  onGetItems={onGetItems}
                  width={width}
                  height={height}
                  ref={rocksComponent}
                />
    
                <Terrain />

            </Physics>

            <FingersComponent
              pointers={pointers}
              distance={2}
            />

            <LightsComponent />
            {/* <EffectsComponent /> */}
            {/* <OrbitControls
              ref={orbit}
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              enableDamping={true}
            /> */}
          </Suspense>
        </Canvas>

        <KeyboardHandler
          setKeyCode={setKeyCode}
          setIsKeyPressed={setIsKeyPressed}
        />
      </div>

      <button onClick={getRocksScreenPositions}> get Rocks Screen Positions </button>
      
    </>
  )
}