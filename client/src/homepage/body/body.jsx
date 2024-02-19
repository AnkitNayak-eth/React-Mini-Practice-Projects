import React from 'react'
import './style.css';
import anime from '../../assets/animejson.json';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import work1 from '../../assets/work1.jpg';
import work2 from '../../assets/work2.jpg';
import work3 from '../../assets/work3.jpg';
import work4 from '../../assets/work4.jpg';
import work5 from '../../assets/work5.jpg';

const Body = () => {
    return (
        <>
        <div className='body-sec' >
            <div className='hero'>
                <div className='body-title'>
                    <h1><span>Learn React.js</span> through practice with over 50+ projects.</h1>
                </div>
                <div className='anim-img' >
                    <Lottie animationData={anime} />
                </div>
            </div>
        </div>
        <div className='blog' >
            
        </div>
        </>
    )
}

export default Body;