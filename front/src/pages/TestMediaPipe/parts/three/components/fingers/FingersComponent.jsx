
import React, { useEffect, useState  } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import SphereComponent from './parts/SphereComponent';

export default function FingersComponent({pointers}) {
 
    const [fingers, setFingers] = useState([])

    useFrame((frame) => {

        const { camera } = frame
        
        if (!camera) {
            return;
        }
 
        const { rotation, position, quaternion } = camera;
        const distance = 4; 

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
                x: (viewPortSize.x * pointer.x) + xLeftAbs + position.x,
                y: (viewPortSize.y * pointer.y) + yTopAbs + position.y,
                z: ((viewPortSize.y / 2) * pointer.z) + position.z
            }

           
            const objectPosition = new THREE.Vector3();

            // центр вьюпорта - camera.position
            // добавляем абсолютные координаты пальца 
            objectPosition.copy(flatCoords);
            // вращаем координаты 
            // угол поворота - берем вращение камеры вокруг своих координат 
            
            const quaternion = new THREE.Quaternion();
            quaternion.copy(quaternion);
            objectPosition.applyQuaternion(quaternion);

            // const euler = new THREE.Euler();
            // euler.copy(rotation)
            // objectPosition.applyEuler(euler);

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