import React, { Suspense, useRef, useState } from 'react';
import { OrbitControls, Environment, Sky } from '@react-three/drei';
import * as THREE from 'three';

export default function LigtsComponent() {
  return (
    <>

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
        
        <ambientLight intensity={0.35} />
        
        <Sky sunPosition={[10, 2, 10]} />
        
    </>

  )
}