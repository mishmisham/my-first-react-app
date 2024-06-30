import React, { Suspense, useRef, useState } from 'react';

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
                attach="material" // How the element should attach itself to its parent
                color="#f9c80a" // The color of the material
            />
        </mesh>
    )
}

export default SphereComponent;