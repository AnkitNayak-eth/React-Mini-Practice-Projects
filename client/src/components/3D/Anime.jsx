import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Anime = (props) => {
  const { nodes, materials } = useGLTF('./model/anime.glb');
  const animeRef = useRef();

  useFrame(() => {
    if (animeRef.current) {
      animeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group {...props} dispose={null} ref={animeRef}>
      <group scale={0.0033}>
        <group position={[-100.395, 806.751, -294.302]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Body_Backup004_Clothes_0.geometry} material={materials.Clothes} />
          <mesh geometry={nodes.Body_Backup004_Clothes_0_1.geometry} material={materials.Clothes} />
          <mesh geometry={nodes.Body_Backup004_Clothes_0_2.geometry} material={materials.Clothes} />
          <mesh geometry={nodes.Body_Backup004_Clothes_Metal_0.geometry} material={materials.Clothes_Metal} />
        </group>
        <mesh geometry={nodes.Body_Backup002_Skin_0.geometry} material={materials.Skin} position={[-100.395, 806.751, -294.302]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Body_Backup003_Hair_0.geometry} material={materials.Hair} position={[-100.395, 806.751, -294.302]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
        <mesh geometry={nodes.Body_Backup005_Fire_0.geometry} material={materials.Fire} position={[-100.395, 806.751, -294.302]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      </group>
    </group>
  );
};

export default Anime;
