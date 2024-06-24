import React, { useState } from 'react';
import { ClientOnly } from "react-client-only";
import HandDetectionComponent from './parts/HandDetection/HandDetectionComponent'

const TestMediaPipe = () => {
  
  return (
    <ClientOnly>
        <div>
           

            <HandDetectionComponent />
        </div>
    </ClientOnly>
  );
};

export default TestMediaPipe;
