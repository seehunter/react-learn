import React from 'react'
import ReactDom from 'react-dom'

const numbers=[1,2,3,4,5];

const listItems=numbers((number)=><li>{number}</li>);

ReactDOM.render(<ul>{listItems}</ul>,document.getElementById('root'));