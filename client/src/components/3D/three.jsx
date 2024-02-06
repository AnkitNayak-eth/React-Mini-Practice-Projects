import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Anime from './Anime';

export const ThreeBG = () => {
    const animeRef = useRef();

    useFrame(() => {
        if (animeRef.current) {
            animeRef.current.rotation.y += 0.01;
        }
    });

    return (
        <>
            <OrbitControls />
            <Anime position={[0, -3, 0]} ref={animeRef} />
        </>
    );
};
