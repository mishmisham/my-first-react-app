import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'

import StoneOne from './stoneOne'

export default function TestWebGLComponent() {
  return (
    <div style={{height: '400px'}}>
      <Canvas camera={{ position: [0, 0, 4.2] }}>
        <Suspense fallback={null}>
          <StoneOne />
          
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />

            <ambientLight intensity={4} />

            <EffectComposer>
                <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} />
                <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
                <Noise opacity={0.02} />
                <Vignette eskil={false} offset={0.1} darkness={1.1} />
            </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  )
}