
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

const stonePath = './client/stone-models/1.glb';
export default function StoneOne(props) {
  const groupRef = useRef()
  const { nodes, materials } = useGLTF(stonePath)

  const handlePointerOver = (e) => {
    // console.log(e)
  }

  const handlePointerClick = (e) => {
    console.log(e)
  }

  return (
    <RigidBody {...props}
      type='dynamic'
      mass={1}
      collider="hull"
      onPointerOver={handlePointerOver}
      onClick={handlePointerClick}
    >
        <group
          ref={groupRef}
          dispose={null}
        >
            <mesh
                rotation={[-Math.PI/2, 0, 0]}
                castShadow
                receiveShadow
                geometry={nodes[1].geometry}
                material={materials["Материал"]} 
            />
        </group>
    </RigidBody>
  )
}

useGLTF.preload(stonePath)