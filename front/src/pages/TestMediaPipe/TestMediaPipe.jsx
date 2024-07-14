import React, { useState, useMemo, useRef } from 'react';
import { ClientOnly } from "react-client-only";

import HandDetectionComponent from '@/components/modules/handDetection/HandDetectionComponent'
import TestWebGLComponent from '@/components/three/TestWebGLComponent'
import CanvasMaskComponent from '@/components/modules/handDetection/CanvasMaskComponent/CanvasMaskComponent'
import HandsValueHandler from '@/components/modules/handDetection/utils/HandsValueHandler'

import { getDistance } from '@/utils/getDistance.js'

const TestMediaPipe = () => {

  const width = 472
  const height = 354

  // данные из media-pipe
  const [rawValues, setRawValues] = useState({})
  // данные, преобразованные в нужные нам в HandsValueHandler
  const [pointers, setPointers] = useState([])

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
            onValues={setRawValues}
          />

          <HandsValueHandler
            setPointers={setPointers}
            rawValues={rawValues}
          />

        </div>
    </ClientOnly>
  );
};

export default TestMediaPipe;
