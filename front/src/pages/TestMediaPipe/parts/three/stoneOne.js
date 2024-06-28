
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const stonePath = './client/stone-models/1.glb';
export default function StoneOne(props) {
  const groupRef = useRef()
  const { nodes, materials } = useGLTF(stonePath)
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes[1].geometry} material={materials["Материал"]} />
    </group>
  )
}

useGLTF.preload(stonePath)