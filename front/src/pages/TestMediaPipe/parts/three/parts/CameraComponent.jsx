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
    keyCode,
    isKeyPressed,
    // onUpdateCamera
}) {

    const refreshCameraRotation = (frame) => {
      if (!isMouseDown) {
        return;
      }

      const{
        pointer,
        camera
      } = frame;

      const {
        x, y
      } = pointer;

      const rotationX = (y / height) * Math.PI * 2;
      const rotationY = (x / width) * Math.PI * 2;
  
      camera.rotation.x += rotationX;
      camera.rotation.y -= rotationY;
    }

    const refreshCameraPosiiton = (frame) => {
      if (!isKeyPressed) {
        return;
      }
      const{
        camera
      } = frame;

      // w
      if (keyCode === 87) {
        camera.position.z -= 1;
      }
      // s
      if (keyCode === 83) {
        camera.position.z += 1;
      }
      // a
      if (keyCode === 65) {
        camera.position.x -= 1;
      }
      // d
      if (keyCode === 68) {
        camera.position.x += 1;
      }
      // q
      if (keyCode === 81) {
        camera.position.y -= 1;
      }
      // e
      if (keyCode === 69) {
        camera.position.y += 1;
      }
    }
  
    useFrame((frame) => {
      refreshCameraRotation(frame);
      refreshCameraPosiiton(frame);
    });
    
    return (
        <PerspectiveCamera
            makeDefault
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
        />
    )
}