import React, {
    Suspense,
    useRef,
    useState,
    forwardRef,
    useImperativeHandle
} from 'react';
import { useThree, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import StoneOne from './parts/stoneOne'

function get2DCoordinates(position, camera, width, height) {
    const vector = new THREE.Vector3(position.x, position.y, position.z);
    vector.project(camera);

    const x = (vector.x + 1) / 2 * width;
    const y = -(vector.y - 1) / 2 * height;
  
    return { 
        cameraX: vector.x,
        cameraY: vector.y,
        canvasX: x,
        canvasY: y,
    };
}

const RocksComponent = ({width, height, onGetItems}, ref) => {

    const [ready, setReady] = useState(false)
    const [rocks, setRocks] = useState([]);
    const [needNewData, setNeedNewData] = useState(true);

    useImperativeHandle(ref, ()=>({
        setNeedNewData,
    }));

    const initStartRandomPositions = () => {
        if (ready) {
            return;
        }

        const sizeBases = [5, 0, 5];
        const n = 15;
        const n2 = n / 3;

        const items = [...Array(10)].map((_, i) => {
            const size = sizeBases[i % 3].toFixed();
        
            const x = Math.random() * n - n2;
            const y = Math.random();
            const z = Math.random() * n - n2;
        
            const result = {
                _id: i,
                position: [x, y, z],
                sizeMulti: size,
            }

            return result
        });

        setRocks(items);
        setReady(true);
    }

    // useThree((frame) => {
    //     if (!needNewData) {
    //         return;
    //     }

    //     const positionedRocks = [...rocks];
    //     // 2D координаты каждого камня
    //     positionedRocks.forEach(rock => {
    //         rock.xy = get2DCoordinates(rock.position, frame.camera, width, height)
    //     })

    //     setNeedNewData(false);

    //     onGetItems(positionedRocks);
    // });

    initStartRandomPositions();

    return (
        <>
            {rocks.map((props, i) => (
                <StoneOne key={props._id} {...props} i={i} />
            ))}
        </>
    )
}

export default forwardRef(RocksComponent);