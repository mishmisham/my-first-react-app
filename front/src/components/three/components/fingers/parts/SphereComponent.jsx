import React, { forwardRef } from 'react';
import * as THREE from 'three'

const SphereComponent = (props, ref) => {
    
    let color = '#fff';

    if (props?.finger === 'THUMB_TIP') {
        color = '#e60d0d';
    }

    if (props?.finger === 'INDEX_FINGER_TIP') {
        color = '#80ff00';
    }

    return (
        <mesh
            ref={ref}
            visible 
            {...props}
        >
            <sphereGeometry
                attach="geometry"
                args={[0.1, 0.1, 0.1, 10]}
            />
            <meshStandardMaterial
                attach="material"
                color={color}
            />
        </mesh>
    )
}

export default forwardRef(SphereComponent);