import  ReactHtmlParser from 'react-html-parser'

const TheirMessage =(props)=>{
    const {message,lastMessage}=props
    console.log(lastMessage)
    const isFirstMessageByUser= !lastMessage || lastMessage.sender.username !== message.sender.username;
    return(
        <div className="message-row">
            {isFirstMessageByUser &&(
                < div className="message-avatar" style={{backgroundImage:`url(${message?.sender?.avatar})`}}/>
            )}
            {
            (message?.attachments?.length>0)?
                    (
                        <img
                        src={message.attachments[0].file}
                        alt="message-attechment"
                        className="message-image"
                        style={{marginLeft:isFirstMessageByUser?'4px':'48px'}}
                        />
                    ):(
                        <div className="message"  style={{float:'left', backgroundColor:'white',marginLeft:isFirstMessageByUser?'4px':'48px'}}>
       { ReactHtmlParser(message.text) }
        </div>
                    )
                }
            
        </div>
    )
}
export default TheirMessage;