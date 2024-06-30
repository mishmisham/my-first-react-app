import React, {
    Suspense,
    useRef,
    useState,
    useMemo,
    useEffect
} from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { PerspectiveCamera} from '@react-three/drei';


export default function CameraComponent({
    isMouseDown,
    width,
    height,
    // onUpdateCamera
}) {
    

    useFrame((frame) => {
      if (!isMouseDown) {
        return;
      }
  
      const {
        x, y
      } = frame.pointer;

      const rotationX = (y / height) * Math.PI * 2;
      const rotationY = (x / width) * Math.PI * 2;
  
      frame.camera.rotation.x += rotationX;
      frame.camera.rotation.y -= rotationY;
    });
    
    return (
        <PerspectiveCamera
            makeDefault
            position={[0, 0, 0]}
        />
    )
}