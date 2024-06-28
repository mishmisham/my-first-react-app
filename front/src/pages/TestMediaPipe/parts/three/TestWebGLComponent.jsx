import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Sky } from '@react-three/drei';
import { Bloom, DepthOfField, EffectComposer, Vignette, Noise } from '@react-three/postprocessing';
import { BallCollider, Physics, RigidBody, CylinderCollider } from "@react-three/rapier";
import * as THREE from 'three';
import { useControls } from 'leva'

import StoneOne from './parts/stoneOne'
import Terrain from './parts/Terrain'


export default function TestWebGLComponent() {

    const [gravity, setGravity] = useState(false);

    const doSomething = () => {
        const newGravity = !gravity;
        setGravity(newGravity);
    }

    const sizeBases = [2, 15, 1]
    const n = 5
    const n2 = n / 2 // items spread in the cube

    const items = [...Array(4)].map((_, i) => {
        const size = sizeBases[i % 3].toFixed()
    
        const x = Math.random() * n - n2
        const y = Math.random()
        const z = Math.random() * n - n2
    
        return {
          position: [x, y, z],
          sizeMulti: size,
        }
    })

  const gravityValue = [0, -5, 0];

  return (
    <div style={{height: '400px'}}>
      <Canvas
        camera={{ position: [0, 8, 7] }}
        lookat={[0,0,0]}
        shadows
      >
        <Suspense fallback={null}>

        <directionalLight
              position={[
                5,
                5,
                5,
              ]}
              castShadow={{
                visible: true,
                position: {
                  x: 2,
                  y: 2,
                  z: 2,
                },
                castShadow: true,
              }}
            />
            
            
            <Physics
              interpolate
              gravity={gravityValue}
              timeStep={1 / 10}
            >
 
                {items.map((props, i) => (
                    <StoneOne key={i} {...props} i={i} />
                ))}
                
                <Terrain />

            </Physics>
          
            <ambientLight intensity={0.15} />
            
            <Sky sunPosition={[10, 2, 10]} />
            
            <EffectComposer>
                {/* <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} /> */}
                <Noise opacity={0.025} />
            </EffectComposer>

            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />

        </Suspense>
      </Canvas>

        <button onClick={doSomething}>
            do something
        </button>
    </div>

  )
}