import React, { useState } from 'react';
import Greeting from './Greeting.jsx'
import Input from './Input.jsx'
import {Link, useNavigate} from 'react-router-dom'
import './Login+Register.css'
import { signInWithGooglePopup, createdUserDocFromAuth, signinAuthUserWithEmailAndPassword } from './utils/firebase'

const Login = (props) =>{
    const logGoogleUser = async () =>{    
        try{
            const {user} = await signInWithGooglePopup();
            const userDocRef = await createdUserDocFromAuth(user)
            window.location.href='/HomePage'
        }
        catch(error){
            console.log('F12 console: Google sign in fail', error.message)
        }
        
    }

    const [contact, setContact] = useState({
        email: '',
        password: ''
    })

    const {email, password} = contact
    const navigate = useNavigate()

    const handleChange = (event)=>{
        const {name,value} = event.target
        setContact ((preValue)=>{
            return{
                ...preValue,
                [name]:value
            }
        })      
    }

    const handleSubmit = async(event) =>
    {       
        event.preventDefault();       
        try{
            const response = await signinAuthUserWithEmailAndPassword(email, password);
            if(email === '' || password === '')
            {
                alert('Your email or password can not be empty')               
            }
            else{
                console.log(response);   
                console.log('Successfully log in to the account'); 
                //window.location.href='/HomePage'
                navigate('/Profile')
            }
        }
        catch(error){                                 
            console.log('F12 console: Data does not match with Firebase', error.message)
            alert('Incorrect Email address or password, please retry')      
        }       
    }

    return (
        <div className='interface'>
            <Greeting
            text = "Welcome to login page!"
            />
            <br></br>
            
            <p>Your Email:</p>
            <Input
            name = 'email'
            type = 'text'
            placeholder = 'email'
            onChange = {handleChange}
            value = {contact.email}
            required = 'required'
            />

            <p>Your Password:</p>
            <Input 
            name = 'password'
            type = 'password'
            placeholder = 'password'
            onChange = {handleChange}
            value = {contact.password}
            required = 'required'
            />
            <br></br>

            <button onClick={handleSubmit}>
                Log in
            </button>

            <button onClick={logGoogleUser}>
                Log in with Google
            </button>

            <br></br>
            <Link to={'/register'}>
                <div>
                <h5>Register instead</h5>
                </div>                
            </Link>
        </div>

    )
}

export default Login;