import React from 'react'
import ReactDom from 'react-dom'

function Welcome(proprs){
    return <h1>Hello,{proprs.name}</h1>
}

const element=<Welcome name="Sara"></Welcome>;

ReactDom.render(element,document.getElementById('root'));