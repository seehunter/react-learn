import React from 'react'
import ReactDom from 'react-dom'


//first style
// class Toggle extends React.Component{
    
//     constructor(props){
//         super(props);
//         this.state={isToggleOn:true};
//         this.handleClick=this.handleClick.bind(this);
//     }

//     handleClick(){
//         this.setState(state=>({
//             isToggleOn:!state.isToggleOn
//         }))
//     }

//     render(){
//         return(
//             <button onClick={this.handleClick} >
//                 {this.state.isToggleOn?'ON':'OFF'}
//             </button>
//         );
//     }
// }


//second style
class Toggle extends React.Component{
    handClick=()=>{
        console.log('this is:',this);
    }

    render(){
        return(
            <button onClick={this.handClick}>
                Click me
            </button>
        );
    }
}

//third style


ReactDom.render(<Toggle />,document.getElementById('root'));
