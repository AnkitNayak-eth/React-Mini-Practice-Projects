import React, { useState } from 'react'
import './style.css'

const Counter = () => {
    const initToggle = true;
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(initToggle);
    const clickAdd = () => {
        setCount(count + 1);
        setToggle(!toggle);
    };

    const clickRemove = () => {
        setCount(count - 1);
        setToggle(!toggle);
    };
    return (
        <div className='counter'>
            {toggle ? <h2 className='h2tag' >COUNTER:{count} </h2> : <h2 className='h2tag' style={{ color: "red" }} >COUNTER:{count} </h2>}
            <div>
                <button  onClick={clickAdd} className='btn' >ADD</button>
                <button onClick={clickRemove} className='btn'>REMOVE</button>
            </div>
        </div>
    )
}

export default Counter