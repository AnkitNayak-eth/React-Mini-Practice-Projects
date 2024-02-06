import React, { useState } from 'react'
import './style.css'
import data from './data'

const Accordion = () => {
    const [selected, setSelected] = useState([]);

    const handleToggle = (getId) => {
        if (selected.includes(getId)) {
            setSelected(selected.filter(id => id !== getId));
        } else {
            setSelected([...selected, getId]);
        }
    }

    return (
        <>
            <div className='center-section'>
                <div>
                    {
                        data && data.length > 0
                            ?
                            data.map(item => (
                                <div className='wrap' key={item.id} >
                                    <div onClick={() => handleToggle(item.id)} className='question' >
                                        <h2>{item.question}</h2>
                                        <span style={{cursor:"pointer",fontSize:"2rem", marginLeft:"1rem"}} >+</span>
                                    </div>
                                    <div>
                                        {
                                            selected.includes(item.id) 
                                            ?
                                            <p className='answer'> {item.answer} </p>
                                            :
                                            null
                                        }
                                    </div>
                                </div>
                            ))
                            :
                            null
                    }
                </div>
            </div>
        </>
    )
}

export default Accordion
