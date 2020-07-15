import React from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import './style.less'

class Login extends React.Component {
    state = {
        show: 'login'
    }
    toggleShow = () => {
        this.setState({
            show: this.state.show === 'login' ? 'register' : 'login'
        })
    }
    render() {
        const { show } = this.state
        return (<div className="login-container">
            <span>{show}</span>
            <div className={`box ${show == 'login' ? 'active' : ''}`}>
                <LoginForm toggleShow={this.toggleShow} />
            </div>
            <div className={`box ${show == 'register' ? 'active' : ''}`}>
                <RegisterForm toggleShow={this.toggleShow} />
            </div>

        </div>)
    }
}

export default Login