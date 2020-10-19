import React from 'react'
// import LoginForm from './LoginForm'
// import RegisterForm from './RegisterForm'
// import Background from '@/components/Background'
import LoadableComponent from '@/utils/LoadableComponent'
import './style.less'
import { withRouter } from 'react-router-dom'

const LoginForm = LoadableComponent(import('./LoginForm'))
const RegisterForm = LoadableComponent(import('./RegisterForm'))
// const Background = LoadableComponent(import('@/components/Background'))

@withRouter
class Login extends React.Component {
    state = {
        show: 'login'
    }
    /**
     * 切换登录注册的面板
     */
    toggleShow = () => {
        this.setState({
            show: this.state.show === 'login' ? 'register' : 'login'
        })
    }
    render() {
        const { show } = this.state
        return (
            <div className="login-container">
                <div className={`box ${show === 'login' ? 'active' : ''}`}>
                    <LoginForm toggleShow={this.toggleShow} />
                </div>
                <div className={`box ${show === 'register' ? 'active' : ''}`}>
                    <RegisterForm toggleShow={this.toggleShow} />
                </div>

            </div>)
    }
}

export default Login