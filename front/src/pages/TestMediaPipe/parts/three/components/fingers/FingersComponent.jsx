
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


        const cameraPosition = camera.position;
        const cameraDirection = camera.getWorldDirection(new THREE.Vector3());
        const distance = 4; 
        

        const objectPosition = new THREE.Vector3();
        objectPosition.copy(cameraPosition);
        objectPosition.addScaledVector(cameraDirection, distance);

        const {
            x, y, z
        } = objectPosition 

        // console.log(objectPosition, camera)



        const items = [];
        pointers.forEach(pointer => {
           
          
            
            const pointerX = ( 4.72 * pointer.x ) + 2.1 + x
            const pointerY = ( 3.53 * pointer.y ) + 1.4 + y

            items.push({
                // position: [
                //     x, y, z
                // ]
                position: [

                    pointerX,
                    pointerY,
                    pointer.z + z
                   
                ],

                rotation: [
                    rotation.x,
                    rotation.y,
                    rotation.z
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