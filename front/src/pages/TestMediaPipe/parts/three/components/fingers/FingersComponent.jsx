
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
        /*
        
        при повороте камеры по x вычитаем z
        при повороте по y вычитаем x
        
        */
 
        const { rotation } = camera;



        // console.log(objectPosition, camera)

        const items = [];
        pointers.forEach(pointer => {
           
            
            const cameraPosition = camera.position;
            const cameraDirection = camera.getWorldDirection(new THREE.Vector3());
            const distance = 4; 
            

            // центр вьюпорта
            const objectPosition = new THREE.Vector3();
            objectPosition.copy(cameraPosition);
            objectPosition.addScaledVector(cameraDirection, distance);
          
            // размеры видимой области "на заданной дистанции"
            const target = new THREE.Vector2();
            const viewPortSize = camera.getViewSize( distance, target );
            // console.log(viewPortSize)


            // при 0 0 - левый верхний угол, 1 1 - gправый нижний
            // const val = {
            //     x: (objectPosition.x + 1) / 2,
            //     y: (-objectPosition.y + 1) / 2
            // }

            // координаты углов вьюпорта
            // const xRight = viewPortSize.x / 2 + objectPosition.x;
            // const yBottom = viewPortSize.y / 2 + objectPosition.y;

            // const xLeft = xRight - viewPortSize.x;
            // const yTop = yBottom - viewPortSize.y;

            const xLeft2 = objectPosition.x - viewPortSize.x / 2;
            const yTop2 = objectPosition.y - viewPortSize.y / 2;
            
           
            const pointerX = viewPortSize.x * pointer.x - xLeft2
            const pointerY = viewPortSize.y * pointer.y - yTop2
           

            const {
                x, y, z
            } = objectPosition    
           
            const pointerZ = z


            items.push({
           
                position: [
                    pointerX,
                    pointerY,
                    pointerZ
                ],

                rotation: [
                    rotation._x,
                    rotation._y,
                    rotation._z
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