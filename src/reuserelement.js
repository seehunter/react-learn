import React from 'react'
import ReactDom from 'react-dom'

function Welcome(props){
    return <h1>Hello,{props.name}</h1>;
}

function App(){
    return (
        <div>
            <Welcome name='you' />
            <Welcome name="he" />
            <Welcome name="me" />
        </div>
    );
}

ReactDOM.render(<App />,document.getElementById('root'));