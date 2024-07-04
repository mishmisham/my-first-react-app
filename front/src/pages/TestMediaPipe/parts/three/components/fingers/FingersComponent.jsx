
import React, { useEffect, useState, useRef, createRef } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import SphereComponent from './parts/SphereComponent';
import CylinderComponent from './parts/CylinderComponent';

export default function FingersComponent({pointers, distance}) {
 
    const objectPosition = new THREE.Vector3();
    const euler = new THREE.Euler();
    const wordDirectionVector = new THREE.Vector3();
    const forViewPortSizeVector = new THREE.Vector2();

    const [camera, setCamera] = useState(null);
    const [viewPortSize, setViewPortSize] = useState({x: 0, y: 0});
    const [absoluteXY, setAbsoluteXY] = useState({x: 0, y: 0});

    const [fingers, setFingers] = useState([]);
    const fingerRefs = useRef([]);
    const fingerStickRefs = useRef([]);

    const getViewportSize = (camera) => {
        // размеры видимой области "на заданной дистанции"
        const viewPort = camera.getViewSize(distance, forViewPortSizeVector);
        setViewPortSize(viewPort);
        // абсолютные x / y краев вьюпорта
        setAbsoluteXY({
            x: viewPort.x / 2,
            y: viewPort.y / 2
        })
    }

    const refreshPointers = () => {
        
        if (!camera) {
            return;
        }
 
        const { rotation, position } = camera;
        // куда смотрит камера
        const cameraDirection = camera.getWorldDirection(wordDirectionVector);
        const items = [];
        pointers.forEach(pointer => {
            // плоские координаты
            const flatCoords = {
                x: (viewPortSize.x * pointer.x) + absoluteXY.x,
                y: (viewPortSize.y * pointer.y) + absoluteXY.y,
                z: pointer.z,
            }
            // добавляем абсолютные координаты пальца 
            objectPosition.copy(flatCoords);
            // вращение вокруг камеры
            euler.copy(rotation)
            objectPosition.applyEuler(euler);
            // относительно камеры удаленность пальца
            const zPositioner = distance// + pointer.z;
            // проецируем координаты перед камерой
            objectPosition.addScaledVector(cameraDirection, zPositioner);

            items.push({
                position: [
                    objectPosition.x + position.x,
                    objectPosition.y + position.y,
                    objectPosition.z + position.z,
                ],
                finger: pointer.finger
            })
        })

        return items;
    }

    useFrame((frame) => {
        if (!camera) {
            setCamera(frame.camera);
            getViewportSize(frame.camera);
        }
    });

    useEffect(() => {
        if (pointers && pointers.length !== fingers.length) {
            const items = refreshPointers();
            setFingers(items)
        }

        if (fingerRefs?.current.length) {
            const items = refreshPointers();
            items.forEach((item, i) => {
                if (fingerRefs.current[i]) {
                    fingerRefs.current[i].position.x = item.position[0];
                    fingerRefs.current[i].position.y = item.position[1];
                    fingerRefs.current[i].position.z = item.position[2];
                }
                if (fingerStickRefs.current[i]) {
                    
                    fingerStickRefs.current[i].position.x = item.position[0];
                    fingerStickRefs.current[i].position.y = item.position[1];
                    fingerStickRefs.current[i].position.z = item.position[2];

                    console.log(fingerStickRefs.current[i])
                    // fingerStickRefs.current[i].quaternion.copy(item.quaternion);
                }
            });
        }
    });

    return (
        <>
            {fingers.map((props, i) => (
                <SphereComponent
                    ref={(element) => fingerRefs.current[i] = element}
                    key={'finger-'+i}
                    {...props}
                />
            ))}
            {fingers.map((props, i) => (
                <CylinderComponent
                    ref={(element) => fingerStickRefs.current[i] = element}
                    key={'finger-stick-'+i}
                    {...props}
                />
            ))}
        </>
    )
}