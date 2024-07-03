import React, { useState, useEffect } from 'react';
import { ClientOnly } from "react-client-only";

import HandDetectionComponent from './parts/HandDetection/HandDetectionComponent'
import TestWebGLComponent from './parts/three/TestWebGLComponent'
import CanvasMaskComponent from './parts/CanvasMaskComponent/CanvasMaskComponent'

import { getDistance } from '@/utils/getDistance.js'

const TestMediaPipe = () => {

  const width = 472
  const height = 354

  const [pointers, setPointers] = useState([])

  // делаем зеркальное отражение координат
  const getTranslatedXYZ = (xyz) => {
    const {
      x,
      y, 
      z
    } = xyz;
    return {
      x: x * -1,
      y: y * -1, 
      z: z * -1
    }
  }
  
  const onValues = (handData) => {
    /*
      const maxDistance = getDistance(THUMB_CMC, PINKY_MCP);
      const catchDistance = getDistance(THUMB_TIP, INDEX_FINGER_TIP);
      console.log('max, catch', maxDistance, catchDistance)
    */

      if (handData?.landmarks.length) {
        const { landmarks } = handData;

        const newPointers = [];

        // обе руки
        landmarks.forEach(hand => {
          // кончик большого пальца
          newPointers.push( 
            getTranslatedXYZ(hand[4])
          );
          // кончик указательного пальца
          newPointers.push( 
            getTranslatedXYZ(hand[8])
          )
        });

        setPointers(newPointers);
      } else {
        setPointers([]);
      }
  }

  return (
    <ClientOnly>
        <div style={{position: 'relative'}}>
          <TestWebGLComponent
            pointers={pointers}
            width={width}
            height={height}
          />

          {/* <CanvasMaskComponent
            width={472}
            height={354}
            pointers={pointers}
          /> */}
          
          <HandDetectionComponent
            onValues={onValues}
          />
        </div>
    </ClientOnly>
  );
};

export default TestMediaPipe;
