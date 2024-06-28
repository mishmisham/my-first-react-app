import React, {useRef} from "react";
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier'
const Terrain = () => {

  const mesh = useRef();

  // Raf loop
  // useFrame(() => {
  //   mesh.current.rotation.z += 0.01;
  // });

  return (
    <RigidBody
      type='static'
      mass={999999000}
      collider='auto'
      
    >
      <group>
        <mesh
          ref={mesh}
          position={[0, 0, 0]} 
          rotation={[-Math.PI/2, 0, 0]}
          receiveShadow
        >
          <planeGeometry attach="geometry" args={[199, 199, 199, 199]} />
          <meshPhongMaterial
            attach="material"
            color={"#ac9b84"}
            shininess={3}
            flatShading
          />
      </mesh>
      </group>
     </RigidBody>
  );
};  

export default Terrain;