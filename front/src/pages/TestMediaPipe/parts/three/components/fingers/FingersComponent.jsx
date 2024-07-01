
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
            const xRight = objectPosition.x - (viewPortSize.x / 2);
            const yBottom = objectPosition.y - (viewPortSize.y / 2);

            const xLeft = objectPosition.x + (viewPortSize.x / 2);
            const yTop = objectPosition.y + (viewPortSize.y / 2);
            
            // плоские координаты
            const pointerX = (viewPortSize.x * pointer.x) + xLeft
            const pointerY = (viewPortSize.y * pointer.y) + yTop
            const pointerZ = objectPosition.z + rotation._z


            console.log('---------------------------------')
            console.log('cameraPosition', cameraPosition)
            console.log('objectPosition', objectPosition)
            console.log('viewPortSize', viewPortSize)
            console.log('xLeft2, yTop2', xLeft, yTop)
            console.log('rotation', rotation)
            console.log('pointer.x, pointer.y',  pointer.x,  pointer.y)
            console.log('pointerX, pointerY', pointerX, pointerY)
            console.log('---------------------------------')


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