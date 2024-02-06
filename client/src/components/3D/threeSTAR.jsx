import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeSTAR = () => {
    const warpFieldMesh = useRef();
    const lineCount = 500;

    useEffect(() => {
        let scene, camera, renderer;
        const canvas = warpFieldMesh.current;

        const width = 1515;
        const height = 385;

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
        camera.position.z = 200;

        renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
        renderer.setSize(width, height);

        const geom = new THREE.BufferGeometry();
        geom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6 * lineCount), 3));
        geom.setAttribute('velocity', new THREE.BufferAttribute(new Float32Array(2 * lineCount), 1));

        const pos = geom.getAttribute('position');
        const posArray = pos.array;
        const vel = geom.getAttribute('velocity');
        const velArray = vel.array;

        for (let lineIndex = 0; lineIndex < lineCount; lineIndex++) {
            let x = Math.random() * 400 - 200;
            let y = Math.random() * 100 - 50; 
            let z = Math.random() * 500 - 100;
            let xx = x;
            let yy = y;
            let zz = z;

            posArray[6 * lineIndex] = x;
            posArray[6 * lineIndex + 1] = y;
            posArray[6 * lineIndex + 2] = z;

            posArray[6 * lineIndex + 3] = xx;
            posArray[6 * lineIndex + 4] = yy;
            posArray[6 * lineIndex + 5] = zz;

            velArray[2 * lineIndex] = velArray[2 * lineIndex + 1] = 0;
        }

        const lineMat = new THREE.LineBasicMaterial({ color: '#ffffff' });
        const lines = new THREE.LineSegments(geom, lineMat);
        scene.add(lines);

        const resizeHandler = () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight / 2; 
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);
        };

        window.addEventListener('resize', resizeHandler, false);

        const animate = () => {
            for (let lineIndex = 0; lineIndex < lineCount; lineIndex++) {
                velArray[2 * lineIndex] += 0.03;
                velArray[2 * lineIndex + 1] += 0.025;

                posArray[6 * lineIndex + 2] += velArray[2 * lineIndex];
                posArray[6 * lineIndex + 5] += velArray[2 * lineIndex + 1];

                if (posArray[6 * lineIndex + 5] > 100) { 
                    let z = Math.random() * 100 - 50; 
                    posArray[6 * lineIndex + 2] = z;
                    posArray[6 * lineIndex + 5] = z;
                    velArray[2 * lineIndex] = 0;
                    velArray[2 * lineIndex + 1] = 0;
                }
            }

            pos.needsUpdate = true;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = 'visible';

        return () => {
            document.body.style.overflow = 'visible';
        };
    }, []);

    return <canvas ref={warpFieldMesh} />;
};

export default ThreeSTAR;
