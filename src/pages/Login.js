import React , { Component } from 'react'
import LoginForm from '../components/LoginForm'

class Login extends Component {
    render() {
        return (
          <div className="Login">
            <LoginForm />
          </div>
        );
      }
}

export default Login