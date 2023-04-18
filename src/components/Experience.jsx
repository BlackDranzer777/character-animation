import { OrbitControls } from '@react-three/drei'
import React from 'react'
import Batman from './Batman'
import Flash from './Flash'

const Experience = () => {
  return (
    <>
        <ambientLight intensity={0.75}/>
        <directionalLight position={[5,-5,5]} castShadow shadowMapWidth={1024} shadowMapHeight={1024}/>
        <OrbitControls/>
        <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, 0, 0]} receiveShadow>
            <planeBufferGeometry args={[10, 10, 1, 1]} />
            <shadowMaterial transparent opacity={0.5} position={[0,-2,0]}/>
        </mesh>
        <group position={[0, 0, 0]}>
            <Flash position={[0,-1.5,0]}/> 
        </group>
    </>
  )
}

export default Experience