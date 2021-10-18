import React from "react";
import  ReactHtmlParser from 'react-html-parser'

const MyMessage =(props)=>{
    const message=props.message
    
    if(message?.attachments?.length>0){
        return(
            <img
            src={message.attachments[0].file}
            alt="message-attechment"
            className="message-image"
            style={{float:'right'}}
            />
        )
    }
    return(
        
        <div className="message"  style={{float:'right',marginRight:'18px',color:'white', backgroundColor:'#ac00e6'}}>
       { ReactHtmlParser(message.text) }
        </div>
    )
}
export default MyMessage;