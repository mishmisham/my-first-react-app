import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import StoneOne from './stoneOne'

export default function TestWebGLComponent() {
  return (
    <div style={{height: '400px'}}>
      <Canvas camera={{ position: [0, 0, 4.2] }}>
        <Suspense fallback={null}>
          <StoneOne />
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
          <ambientLight intensity={4} />
        </Suspense>
      </Canvas>
    </div>
  )
}