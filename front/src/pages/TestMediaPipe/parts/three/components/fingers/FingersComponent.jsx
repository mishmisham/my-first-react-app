
import React, { useEffect, useState  } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import SphereComponent from './parts/SphereComponent';

export default function FingersComponent({pointers}) {
 
    const [fingers, setFingers] = useState([])

    const state = useThree()

    useFrame((frame) => {

        const { camera } = frame
        
        if (!camera || !pointers.length) {
            return;
        }
 
        const { rotation } = camera;
        const distance = 4; 

        // размеры видимой области "на заданной дистанции"
        const viewPortSize = camera.getViewSize(distance, new THREE.Vector2() );
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
                z: 0//((viewPortSize.y / 2) * pointer.z)
            }

            // угол поворота - берем вращение камеры вокруг своих координат 
            const euler = new THREE.Euler();
            euler.copy(rotation)
            const objectPosition = new THREE.Vector3();
            // objectPosition.copy(camera.position); // центр вьюпорта
            // добавляем абсолютные координаты пальца 
            objectPosition.copy(flatCoords);
            // вращаем координаты 
            objectPosition.applyEuler(euler);
            // проецируем координаты перед камерой
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