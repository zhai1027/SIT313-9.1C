import React from "react";
import {useEffect, useState} from 'react'
import {getAuth} from 'firebase/auth'
import {Link, useNavigate} from 'react-router-dom'

function Profile()
{
    const [user,setUser] = useState(null)
    const navigate = useNavigate
    const auth = getAuth()
    useEffect (()=>{
        setUser(auth.currentUser)
    },[])

    const onLogout = () =>{
        auth.signOut();
        //navigate('/home')
        window.location.href='home'
    }
    return (
        <div>
            {user ? <h1>Welcome: {user.email}</h1>:"Not logged in"}
            <button type="submit" onClick={onLogout}>Log out</button>
        </div>
    )
    
}

export default Profile