import React, { forwardRef } from 'react';
import * as THREE from 'three'

const CylinderComponent = (props, ref) => {
    
    const cylinderHeight = 100;
    const globalGeometry = new THREE.CylinderGeometry(0.05, 2.45, cylinderHeight, 12);
    
    globalGeometry.translate( 0, -cylinderHeight/2, 0 );
    // globalGeometry.rotate(0, Math.PI / 2, 0);

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
            geometry={globalGeometry}
            {...props}
        >
            <meshBasicMaterial
                attach="material"
                color={color}
                transparent={true}
                opacity={0.3}
            />
        </mesh>
    )
}

export default forwardRef(CylinderComponent);