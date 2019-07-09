import React, {Component} from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom';

class Auth extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirect: false
        }
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.register = this.register.bind(this);

    }

    handleUsername(e) {
        this.setState({username: e.target.value})
    }

    handlePassword(e) {
        this.setState({password: e.target.value})
    }

    register() {
        axios
            .post('/auth/register', {username: this.state.username, password: this.state.password}).then(() => {
                this.setState({redirect: true})
            })
            .catch(() => {alert('Registration unsuccessful.')})
    }


    render(){
        if(this.state.redirect) {
            return <Redirect to='/dashboard' />
        }
        return (
            <div className='auth'>
                <div className="login-form">
                    Username
                    <input className='login-input' placeholder='username' onChange={this.handleUsername} />
                    Password
                    <input className='login-input' placeholder='password' onChange={this.handlePassword} />
                    <button>Login</button>
                    <button onClick={this.register} >Register</button>
                </div>
            </div>
        )
    }
}

export default Auth;