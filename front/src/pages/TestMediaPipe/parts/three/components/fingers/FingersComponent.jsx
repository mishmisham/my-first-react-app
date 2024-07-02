
import React, { useEffect, useState  } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import SphereComponent from './parts/SphereComponent';

export default function FingersComponent({pointers, width, height}) {
 
    const [fingers, setFingers] = useState([])

    const state = useThree()

    useFrame((frame) => {

        const { camera } = frame
        
        if (!camera || !pointers.length) {
            return;
        }
 
        const { rotation } = camera;

        // при 0 0 - левый верхний угол, 1 1 - gправый нижний
        // const val = {
        //     x: (objectPosition.x + 1) / 2,
        //     y: (-objectPosition.y + 1) / 2
        // }

        const distance = 4; 

        // размеры видимой области "на заданной дистанции"
        const viewPortSize = camera.getViewSize( distance, new THREE.Vector2() );
        // абсолютные x / y краев вьюпорта
        const xLeftAbs = viewPortSize.x / 2;
        const yTopAbs = viewPortSize.y / 2;
        
        const cameraDirection = camera.getWorldDirection(new THREE.Vector3());

        const items = [];
        pointers.forEach(pointer => {
            // плоские координаты
            const flatCoords = {
                x: (viewPortSize.x * pointer.x) + xLeftAbs,
                y: (viewPortSize.y * pointer.y) + yTopAbs,
                z: ((viewPortSize.y / 2) * pointer.z)
            }

            const euler = new THREE.Euler();
            euler.copy(rotation)
            // центр вьюпорта
            const objectPosition = new THREE.Vector3();
            // objectPosition.copy(camera.position); // центр вьюпорта
            objectPosition.copy(flatCoords);
            
            objectPosition.applyEuler(euler);
            objectPosition.addScaledVector(cameraDirection, distance);

            const rotateX = rotation._x || 0;
            const rotateY = rotation._y || 0;
            const rotateZ = rotation._z || 0;
           
            items.push({
           
                position: [
                    objectPosition.x,
                    objectPosition.y,
                    objectPosition.z,
                ],

                rotation: [
                    rotateX,
                    rotateY,
                    rotateZ
                ],

            })
        })
    
        setFingers(items)
    })



    return (
        <>
            {fingers.map((props, i) => (
                <SphereComponent key={i} {...props} i={i} />
            ))}
        </>
    )
}