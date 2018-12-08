import React from 'react'
import ReactDOM from 'react-dom'

function MailBox(props){
    const unreadMessage=props.unreadMessage;
    return(
        <div>
            {unreadMessage.length>0 &&
                <h2>
                    You have {unreadMessage.length}unread messages
                </h2>
            }
        </div>
    )
    
}
const messages=['React','Re:React','Re:Re:React'];
ReactDOM.render(
    <MailBox unreadMessage={messages} />,
    document.getElementById('root')
)
