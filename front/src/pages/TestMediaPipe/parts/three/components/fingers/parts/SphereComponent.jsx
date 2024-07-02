import React, { Suspense, useRef, useState, useEffect } from 'react';
import * as THREE from 'three'

const SphereComponent = (props) => {
    
    return (
        <mesh
            visible // object gets render if true
            castShadow // Sets whether or not the object cats a shadow
            {...props}
        >
            {/* A spherical shape*/}
            <sphereGeometry attach="geometry" args={[0.25, 0.25, 0.25]} />
            {/* A standard mesh material*/}
            <meshStandardMaterial
                attach="material"
                color="#afff00" 
            />
        </mesh>
    )
}

export default SphereComponent;