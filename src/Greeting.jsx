import React from 'react';
import './Additional.css';

const Greeting = (props) => {
    return(
        <div className='Greeting'>
            <h1>{props.text}</h1>
        </div>
    )
}

export default Greeting;