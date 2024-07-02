
import React, { useEffect, useState  } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import SphereComponent from './parts/SphereComponent';

export default function FingersComponent({pointers, distance}) {
 
    const [fingers, setFingers] = useState([])

    useFrame((frame) => {

        const { camera } = frame
        
        if (!camera) {
            return;
        }
 
        const { rotation, position } = camera;
        
        // куда смортрит камера
        const cameraDirection = camera.getWorldDirection(new THREE.Vector3());
        // размеры видимой области "на заданной дистанции"
        const viewPortSize = camera.getViewSize(distance, new THREE.Vector2() );
        // абсолютные x / y краев вьюпорта
        const xLeftAbs = viewPortSize.x / 2;
        const yTopAbs = viewPortSize.y / 2;
        
        const items = [];
        pointers.forEach(pointer => {
            
            // плоские координаты
            const flatCoords = {
                x: (viewPortSize.x * pointer.x) + xLeftAbs,
                y: (viewPortSize.y * pointer.y) + yTopAbs,
                z: ((viewPortSize.x / 2) * pointer.z),
            }

            const objectPosition = new THREE.Vector3();

            // добавляем абсолютные координаты пальца 
            objectPosition.copy(flatCoords);
            
            // вращение вокруг камеры
            const euler = new THREE.Euler();
            euler.copy(rotation)
            objectPosition.applyEuler(euler);

            // проецируем координаты перед камерой
            objectPosition.addScaledVector(cameraDirection, distance);

            items.push({
           
                position: [
                    objectPosition.x + position.x,
                    objectPosition.y + position.y,
                    objectPosition.z + position.z,
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