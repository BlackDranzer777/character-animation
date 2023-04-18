import { useState } from 'react'
import Experience from './components/Experience'
import { Canvas } from '@react-three/fiber'
import Interface from './components/Interface';


function App() {

  return (
    <>
      <Canvas camera={{ position: [0,1.5,2.5], fov: 85}} shadows>
        <Experience/>
      </Canvas>
      <Interface/>
    </>
  );
}

export default App
