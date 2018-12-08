import React from 'react'
import ReactDom from 'react-dom'

function Comment(props){
    return(
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avater" 
                    src={props.author.avaterUrl}
                    alt={props.author.name}
                />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {FormData(props.date)}
            </div>
        </div>
    );
}

function UserInfo(props){
    return(
        <div className="UserInfo">
            <img className="Avater"
                src={props.avaterUrl}
                alt={props.name}
            />
            <div className="UserInfo_name">
                {props.name}
            </div>
        </div>
    );
}

function CommentText(props){
    return(
        <div className="Userinfo-name">
            {props.name}
        </div>
    );
}

function CommentDate(props){
    return(
        <div className="Comment-date">
            {FormData({props.date})}
         </div>
    );
}

function Comment2(props){
    return(
        <UserInfo user={props.author} />
        <CommentText  />
        <CommentDate />
    );
}

const userinfo={
    author:{
        name:'lkx',
        avaterUrl:'www.baidu.com'
    },
    text:'comment',
    date:new Date().toLocaleDateString()
}