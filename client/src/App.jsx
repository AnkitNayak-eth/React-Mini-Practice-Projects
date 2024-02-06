import React from 'react';
import { ThreeBG } from './components/3D/three';
import { Canvas } from '@react-three/fiber';
import ThreeSTAR from './components/3D/threeSTAR';
import Counter from './components/Counter/Counter';
import Accordion  from './components/accordion/Accordion';
import RandomColor from './components/random-color/RandomColor';



function App() {
  return (
    <div >
      <h1 style={{textAlign:'center', color:'white', margin:'3rem'}} >react - mini - practice - projects</h1>
      <div >
        <ThreeSTAR />
        <Canvas style={{ position: "absolute", top: 0, left: 0, marginTop: "8rem", height: "380px" }}>
          <ThreeBG />
        </Canvas>
      </div>
      <div>
        <Accordion />
        <RandomColor />
      </div>
      <div >
        <Counter />
      </div>
    </div>
  );
}

export default App;
