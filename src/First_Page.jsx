import React from 'react'
import './Main_Page.css'
import Main from './Main_Page.jsx'

function Greeting(){
    return (
    <div className='Greeting' style={{marginTop: 200}}>
        <h1>Welcome to 7.1P</h1>
        <h2>From Ziyan Zhai</h2>
        <a href='http://localhost:3000/home'>
            <button type='button' onClick={<Main/>}>Jump to main page</button>
        </a>
    </div>
    )
}

export default Greeting;