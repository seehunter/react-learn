import React from 'react'
import ReactDom from 'react-dom'

class Clock extends Comment{

    constructor(props){
        super(props);
        this.state={date:new Date()};
    }

    render(){
        return(
            <div>
                <h1>Hello,World!</h1>
                <h2>It is {this.state.date.toLoaleTimeString()}</h2>
            </div>
        );
    }
}

ReactDom.render(<Clock />,document.getElementById('root'));