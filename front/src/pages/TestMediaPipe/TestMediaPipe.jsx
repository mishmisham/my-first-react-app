import React, { useState } from 'react';
import { ClientOnly } from "react-client-only";
import HandDetectionComponent from './parts/HandDetection/HandDetectionComponent'
import TestWebGLComponent from './parts/three/TestWebGLComponent'
import { getDistance } from '@/utils/getDistance.js'

const TestMediaPipe = () => {
  
  const onValues = (hand) => {
    /*
      const maxDistance = getDistance(THUMB_CMC, PINKY_MCP);
      const catchDistance = getDistance(THUMB_TIP, INDEX_FINGER_TIP);
      console.log('max, catch', maxDistance, catchDistance)
    */
  }
  
  return (
    <ClientOnly>
        <div>
          <TestWebGLComponent />

          {/* <HandDetectionComponent onValues={onValues}/> */}
        </div>
    </ClientOnly>
  );
};

export default TestMediaPipe;
