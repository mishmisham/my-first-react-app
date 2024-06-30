import React, { Suspense, useRef, useState } from 'react';
import { Bloom, DepthOfField, EffectComposer, Vignette, Noise } from '@react-three/postprocessing';

export default function EffectsComponent() {
  return (
    <EffectComposer>
        <Bloom luminanceThreshold={1} luminanceSmoothing={1.9} height={300} />
        {/* <Noise opacity={0.025} /> */}
    </EffectComposer>
  )
}