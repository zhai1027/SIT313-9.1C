import React from 'react'
import './Main_Page.css'
import {Outlet, Link} from 'react-router-dom'; 

function Main(){
    return (
    <div className="Background_Color">
        <hr></hr>
        <div className='FONT_STYLE1'>            
            <form>            
                <h1 style={{marginLeft: 10}}>DEV@DEAKIN
                <input className='INPUT_STYLE1' placeholder="Search......"></input>                    
                <button className="BUTTON_STYLE1" type="submit">POST</button>

                <Link to={'/login'}>
                    <button className="BUTTON_STYLE1" style={{color: 'red'}}>LOGIN</button> 
                </Link>                
                <Outlet/>
                </h1>                                          
            </form>
        </div>

    </div>
    )
}
export default Main;
//Suggestion: If you want to keep the URL like "http://localhost:3000/home/login" instead of "http://localhost:3000/login"
//What you need to do is to change line 15, "/login" to "login". Remove "/" will change the URL format.
//Without "/", the URL name will follow previous link and add extra name.
//And don't forget to change the URL in App.js 