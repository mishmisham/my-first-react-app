
import React, { useEffect, useState  } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import SphereComponent from './parts/SphereComponent';

export default function FingersComponent({pointers, orbit}) {
 

    const [fingers, setFingers] = useState([])

    const state = useThree()


    useFrame((frame) => {

        const items = [];
        pointers.forEach(pointer => {

           
            const { camera } = state;

            const cameraPosition = camera.position;
            const cameraDirection = camera.getWorldDirection(new THREE.Vector3());
            const distance = 4; 
            
            // const quaternion = new THREE.Quaternion();
            // cameraDirection.applyQuaternion(quaternion)

            const objectPosition = new THREE.Vector3();
            objectPosition.copy(cameraPosition);
            objectPosition.addScaledVector(cameraDirection, distance);

            // const quaternion = new THREE.Quaternion();
            // const vector = new THREE.Vector3();
            // vector.subVectors(camera.position, objectPosition);
            // quaternion.setFromUnitVectors(objectPosition, pointer);

            // console.log(quaternion);

            // console.log(camera)


            // const topLeftCorner = new THREE.Vector3(
            //     geometry.boundingBox.min.x,
            //     geometry.boundingBox.max.y,
            //     geometry.boundingBox.min.z
            // );
            // console.log(topLeftCorner); 


            console.log(frame.viewport.width)

            const {
                x, y, z
            } = objectPosition // pointer; //getCameraCenterView(pointer);

            items.push({
                // position: [
                //     x, y, z
                // ]
                // position: [


                    // x - (frame.viewport.width / distance),
                    // y - (frame.viewport.height / distance),
                    // z
                  
                    // x + (pointer.x * frame.viewport.width),
                    // y + (pointer.y * frame.viewport.height),
                    // z + pointer.z,
                   
                // ],

                rotation: [
                    camera.rotation._x,
                    camera.rotation._y,
                    camera.rotation._z
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