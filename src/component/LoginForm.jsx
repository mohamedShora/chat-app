import React from "react";
import { useState } from "react"
import axios from "axios";
import {Link}  from 'react-router-dom'
const LoginForm=()=>{
    const [userName,setUserName]=useState('');
    const [Password,setPassword]=useState('');
    const [error,setError]=useState('')
    
    const handleSubmit= async(e)=>{
        e.preventDefault();
         const authObject= {'PRIVATE-KEY': '2d159bb9-72da-4ec9-8353-b847a21980fb'}
        
        try{
           await  axios.get('https://api.chatengine.io/chats',{headers: authObject}).then(res=>console.log(res))
             localStorage.setItem('userName',userName)
             localStorage.setItem('Password',Password)
             window.location.reload();
        }
        catch(e){
            setError('Oops, incorrect credentials.')
        }
       
    }
    return(

		<div className="wrapper">
			<div className="form">
				<h1 className="title">Chat Application</h1>
				<form onSubmit={handleSubmit}>
					<input type='text' placeholder="userName" onChange={(e)=>{setUserName(e.target.value) } } className="input" required/>
					<input type='password' placeholder="Password" onChange={(e)=>{setPassword(e.target.value) } } className="input" required/>
					<div align="center">
						<button type="submit" className="button">
							<span>Login</span>
						</button>

					</div>
					<div align="center" className="con">
					<p className="sign">or <Link to="/signUp" className="sig">Sign Up</Link></p>
				</div>
				</form>
				
			</div>
		</div>
       
	

	


    )
}
export default LoginForm;



