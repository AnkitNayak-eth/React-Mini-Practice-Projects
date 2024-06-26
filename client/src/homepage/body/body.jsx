import React from 'react'
import './style.css';
import anime from '../../assets/animejson.json';
import Lottie from 'lottie-react';
import Blog from './blog/Blog';

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
            <Blog/>
        </div>
        </>
    )
}

export default Body;