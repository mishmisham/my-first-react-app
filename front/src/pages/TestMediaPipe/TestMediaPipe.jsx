import React, { useState } from 'react';
import { ClientOnly } from "react-client-only";
import HandDetectionComponent from './parts/HandDetection/HandDetectionComponent'
import TestWebGLComponent from './parts/three/TestWebGLComponent'

const TestMediaPipe = () => {
  
  return (
    <ClientOnly>
        <div>
          <TestWebGLComponent />

          <HandDetectionComponent />
        </div>
    </ClientOnly>
  );
};

export default TestMediaPipe;
