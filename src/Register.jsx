import React, { useState } from 'react';
import Greeting from './Greeting.jsx'
import Input from './Input.jsx'
import {Link} from 'react-router-dom'
import { createAuthUserWithEmailAndPassword, createdUserDocFromAuth } from './utils/firebase.js';
import './Login+Register.css'

const Register = (props) =>{
    const [contact, setContact] = useState({
        displayname: '',
        email: '',
        password: '',
        confirmpassword: ''
    })

    const {displayname, email, password, confirmpassword} = contact;
    console.log(contact);

    const handleChange = (event)=>{
        const {name,value} = event.target
        setContact ((preValue)=>{
            return{
                ...preValue,
                [name]:value
            }
        })
    }
    const handleSubmit = async(event) =>{
        event.preventDefault();

        if(password !== confirmpassword){
            alert('Password does not match.')
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            await createdUserDocFromAuth(user, {displayname});
            alert('Successfully save the information into database, jump to login page now.')
            window.location.href='login' 
        }
        catch(error){
            console.log('Error in creating user', error.message)
        }
    }

    return (
        <div className='interface'>
            <Greeting
            text = "Create an DEV@Deakin account"
            />
            <br></br>
            
            <p>Your Name:</p>
            <Input
            name = 'displayname'
            type ="text"
            placeholder = 'name'
            onChange = {handleChange}
            value = {contact.displayname}
            />

            <p>Your Email:</p>
            <Input
            name = 'email'
            type ="text"
            placeholder = 'email'
            onChange = {handleChange}
            value = {contact.email}
            />

            <p>Your Password:</p>
            <Input 
            name = 'password'
            type = 'password'
            placeholder = 'password'
            onChange = {handleChange}
            value = {contact.password}
            />

            <p>Confirm Password</p>
            <Input 
            name = 'confirmpassword'
            type = 'password'
            placeholder = 'confirmpassword'
            onChange = {handleChange}
            value = {contact.confirmpassword}
            />

            <button onClick={handleSubmit}>
                Sign up
            </button>

            <br></br>

            <br></br>
            <Link to={'/login'}>
                <div>
                    <h5>Got an account? Click here!</h5>
                </div>                
            </Link>
        </div>

    )
}

export default Register;