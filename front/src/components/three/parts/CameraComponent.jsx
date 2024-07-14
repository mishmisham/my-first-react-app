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
    position,
    rotation
    // onUpdateCamera
}) {

    const [camera, setCamera] = useState(null);
    const [pointer, setPointer] = useState(null);

    const refreshCameraRotation = () => {
      if (!isMouseDown) {
        return;
      }

      const {
        x, y
      } = pointer;

      const rotationX = (y / height) * Math.PI * 2;
      const rotationY = (x / width) * Math.PI * 2;
  
      camera.rotation.x += rotationX;
      camera.rotation.y -= rotationY;
    }

    const onseStepMoveValue = 0.1;

    const refreshCameraPosiiton = () => {
      if (!isKeyPressed) {
        return;
      }

      // w
      if (keyCode === 87) {
        camera.position.z -= onseStepMoveValue;
      }
      // s
      if (keyCode === 83) {
        camera.position.z += onseStepMoveValue;
      }
      // a
      if (keyCode === 65) {
        camera.position.x -= onseStepMoveValue;
      }
      // d
      if (keyCode === 68) {
        camera.position.x += onseStepMoveValue;
      }
      // q
      if (keyCode === 81) {
        const minYPos = Math.max(0, camera.position.y - onseStepMoveValue)
        camera.position.y = minYPos;
      }
      // e
      if (keyCode === 69) {
        camera.position.y += onseStepMoveValue;
      }
    }
  
    useEffect(() => {
      if (camera) {
        refreshCameraRotation();
        refreshCameraPosiiton();
      }
    });

    useFrame((frame) => {
      if (!camera) {
          setCamera(frame.camera);
          setPointer(frame.pointer);
      }
  });
    
    return (
        <PerspectiveCamera
            makeDefault
            position={position}
            rotation={rotation}
        />
    )
}