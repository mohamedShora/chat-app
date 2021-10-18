import React from "react";
import MessageForm from './MessageForm';
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";
import Moment from "react-moment";
const ChatFeed=(props)=>{
    const {chats,activeChat,userName,messages}=props;
    const chat=chats && chats[activeChat]
    
    // const renderReadReceipts=(message, x)=>{
        
    //     return chat.people.map((person,index)=>
            
    //         person.last_read === message.id &&  (
            
    //             <div 
    //             key={`read_${index}`}
    //             className="read-receipt"
    //             style={{float:x?'right':'left',
    //             backgroundImage:`url(${person?.person?.avatar})`
                
    //         }}

    //             />
                
    //         )
    //     )
    // }
   const  renderMessages=()=>{
       const keys=Object.keys(messages)
      
       return(keys.map((key,index)=>{
            const message=messages[key]
            const lastMessageKeys=index===0?null:keys[index-1]
          
             const mymessage=userName===message.sender.username
             return(
                 <div key={`msg-${index}`} style={{width:'100%'}}>
                 <div className="message-block">
                    {mymessage?<MyMessage message={message}/>:<TheirMessage message={message} lastMessage={messages[lastMessageKeys]}/>}
                 </div>
                 <div className="read-receipts" style={{marginRight:mymessage?'18px':'0px',marginLeft:mymessage?'0px':'68px'}}>
                    
                    
                 </div>
                 </div>
             )
       }))
    }
 
    if(!chat) return 'loading ....'
    return(
        <div className='chat-feed'>
            <div className='chat-title-container'>
                <div className='chat-title'>
                {chat.title}
                </div>
                <div className='chat-subtitle'>
                <Moment format="YYYY/MM/DD">
                {chat.last_message.created}
            </Moment>
                </div>
                <div className='chat-subtitle'>
                <Moment format="hh:mm:ss">
                {chat.last_message.created}
            </Moment>
                </div>
            </div>
            {renderMessages()}
            <div style={{height:'100px'}}/>
            <div className="message-form-container">
                    <MessageForm {...props} chatId={activeChat}/>
            </div>
        </div>
    )
}

export default ChatFeed;