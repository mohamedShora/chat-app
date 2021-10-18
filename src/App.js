import React from "react";
import './App.css'
import { ChatEngine } from  "react-chat-engine";
import  ChatFeed  from "./component/ChatFeed";
import LoginForm from "./component/LoginForm";
import { BrowserRouter, Route } from "react-router-dom";
import SignUp from './component/SignUp'
function App() {
	if(!localStorage.getItem('userName'))
	return(
		<BrowserRouter>
		<Route exact path='/' component={LoginForm} />
		<Route  path='/signUp' component={SignUp} />
		</BrowserRouter>
	)
	
	
  return (
    <ChatEngine
			height='100vh'
			userName={localStorage.getItem('userName')}
			userSecret={localStorage.getItem('Password')}
			projectID='711d16d2-9550-434c-b51f-8991543d73ce'
    //   renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps}/>}
		/>

    
  );
}

export default App;
