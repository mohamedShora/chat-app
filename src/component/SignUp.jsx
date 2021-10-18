import React from "react";
import { useState } from "react"
import axios from "axios";
import '../component/login.css';
import '../component/font.css'
import imag from '../images/form-v7.jpg'
import {Link ,useHistory} from 'react-router-dom'
const SignUp=()=>{
    const [userName,setUserName]=useState('');
    const [Password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const [error,setError]=useState('')
    const history=useHistory()
  
    const handleSubmit= async(e)=>{
        e.preventDefault();
        // const authObject= {'PRIVATE-KEY': '2d159bb9-72da-4ec9-8353-b847a21980fb'}
        var data = {
            "username": 'mo',
            "secret": '1234',
            "email": `${userName}@gmail.com`,
            "first_name": "Bob",
            "last_name": "Baker",
            
         
        };
        // try{
        // //    await  axios.put('https://api.chatengine.io/users/',{headers: authObject},{'data-row':{"username": "test_user2",
        //    "secret": "password"}}).then(res=>console.log(res))
        //     // localStorage.setItem('userName',userName)
        //     // localStorage.setItem('Password',Password)
        //     // window.location.reload();
        // }
        // catch(e){
        //     setError('Oops, incorrect credentials.')
        // }
        let formdata= new FormData();
        formdata.append("username",userName)
        formdata.append("secret",Password)
        formdata.append("email", email)
        formdata.append("first_name", userName)
        
        var config = {
            method: 'post',
            url: 'https://api.chatengine.io/users/',
            headers: {
                'PRIVATE-KEY': '{{2d159bb9-72da-4ec9-8353-b847a21980fb}}',
                'Content-Type': 'multipart/form-data'
            },
            data : formdata
        };
        let member={
            method:'get',
            url:'https://api.chatengine.io/chats/62920/people',
            headers:{
                'Project-ID': '{{711d16d2-9550-434c-b51f-8991543d73ce}}',
                'User-Name': '{{Ahmed}}' ,
                 'User-Secret': '{{1234}}'
            },
          
        }
        try{
        axios(config)
        .then(function (response) {
            console.log(response);
        });
        // axios.get('https://api.chatengine.io/chats/62920/people',{headers:{
        //     'Project-ID': '{{711d16d2-9550-434c-b51f-8991543d73ce}}',
        //     'User-Name': '{{Ahmed}}' ,
        //      'User-Secret': '{{1234}}'
        // }}).then(res=>console.log(res))
        history.push('/')
    }
        catch( error) {
            console.log(error); 
        };
    }
    return(
        <body className="form-v7">
	<div className="page-content">
		<div className="form-v7-content">
			<div class="form-left">
				<img src={imag} alt="form"/>
				<p class="text-1">Sign Up</p>
				<p class="text-2">Privaci policy & Term of service</p>
			</div>
			<form class="form-detail"  id="myform" onSubmit={handleSubmit}>
				<div class="form-row">
					<label for="username">USERNAME</label>
					<input type="text" name="username" id="username" class="input-text" onChange={(e)=>setUserName(e.target.value)}/>
				</div>
				<div class="form-row">
					<label for="your_email">E-MAIL</label>
					<input type="text" name="your_email" id="your_email" class="input-text" onChange={(e)=>setEmail(e.target.value)} required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"/>
				</div>
				<div class="form-row">
					<label for="password">PASSWORD</label>
					<input type="password" name="password" id="password" class="input-text" onChange={(e)=>setPassword(e.target.value)} required/>
				</div>
				<div class="form-row">
					<label for="comfirm_password">CONFIRM PASSWORD</label>
					<input type="password" name="comfirm_password" id="comfirm_password" class="input-text" required/>
				</div>
                
				<div class="form-row-last">
					<input type="submit" name="register" class="register" onSubmit={handleSubmit} value="Sign Up"/>
					<p>Or<Link to="/">Sign in</Link></p>
				</div>
			</form>
		</div>
	</div>
	<script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
	<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
	<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/additional-methods.min.js"></script>
	<script>
		
	</script>
</body>
    )
}
export default SignUp;



