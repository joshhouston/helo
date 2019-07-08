import React, {Component} from 'react';


class Auth extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);

    }

    handleUsername(e) {
        this.setState({username: e.target.value})
    }

    handlePassword(e) {
        this.setState({password: e.target.value})
    }




    render(){
        return (
            <div className='auth'>
                <div className="login-form">
                    Username
                    <input className='login-input' placeholder='username' onChange={this.handleUsername} />
                    Password
                    <input className='login-input' placeholder='username' onChange={this.handleUsername} />
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </div>
        )
    }
}

export default Auth;