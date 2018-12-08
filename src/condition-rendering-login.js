import React from 'react'
import ReactDOM from 'react-dom'

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }

function loginButton(props){
    return(
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function logoutButton(props){
    return(
        <button onClick={props.onClick} >
            Logout
        </button>
    )
}

class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.handleLoginClick=this.handleLoginClick.bind(this);
        this.handleLoginOutClick=this.handleLoginOutClick.bind(this);
        this.state=({isLoggedIn:false})
    }

    handleLoginClick(){
        this.setState({isLoggedIn:true});
    }

    handleLoginOutClick(){
        this.setState({isLoggedIn:false});
    }

    render(){
        const isLoggedIn=this.state.isLoggedIn;
        let button;

        if(isLoggedIn){
            button =<logoutButton onclick={this.handleLoginOutClick} />
        }else{
            button =<loginButton onclick={this.handleLoginClick} />
        }

        return(
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
)