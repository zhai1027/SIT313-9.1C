import React from 'react'
import './Main_Page.css'
import {Link} from 'react-router-dom';

function Greeting(){
    return (
    <div className='Greeting' style={{marginTop: 200}}>
        <h1>Welcome to 7.1P</h1>
        <h2>From Ziyan Zhai</h2>
        <Link to = '/login'>
            Log in    
        </Link>
    </div>
    )
}

export default Greeting;
