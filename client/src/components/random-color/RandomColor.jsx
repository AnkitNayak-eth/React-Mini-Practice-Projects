import React, { useState } from 'react'
import './style.css'

const RandomColor = () => {
    const [color, setColor] = useState('#000000');

    const generateRandom = (length) => {
        return Math.floor(Math.random() * length);
    }

    const handleColorHex = () => {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += hex[generateRandom(hex.length)]
        }
        setColor(hexColor);
    }

    const handleColorRgb = () => {
        const r = generateRandom(256);
        const g = generateRandom(256);
        const b = generateRandom(256);

        setColor(`rgb(${r},${g},${b})`);
    }

    const copyColor = () => {
        navigator.clipboard.writeText(color);
        alert(`Color code "${color}" copied to clipboard!`);
    }

    return (
        <>
            <div style={{ backgroundColor: color, margin: '1rem' }} className='center1-section' >
                <h2 className='color' onClick={() => copyColor()} >{color}</h2>
                <div>
                    <button className='btn'  onClick={() => handleColorHex()} >Generate Random Color</button>
                    <button className='btn' onClick={() => handleColorRgb()} >Generate Random Color</button>
                </div>
            </div>
        </>
    )
}

export default RandomColor