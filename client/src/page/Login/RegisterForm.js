import React from 'react'
import { Form, Input } from 'antd'

class RegisterForm extends React.Component {
    backLogin = () => {
        // this.props.form.resetFields()
        this.props.toggleShow()
    }
    render() {
        return (<div>
            <h3 className="title">用户注册</h3>
            <Form >
                <Form.Item >
                    <Input placeholder="用户名" />
                </Form.Item>
                <Form.Item >
                    <Input.Password placeholder="密码" />
                </Form.Item>
                <Form.Item>
                    <Input.Password placeholder="确认密码" />
                </Form.Item>
                <Form.Item>
                    <div className="btn-box">
                        <div className="loginBtn">注册</div>
                        <div className="registerBtn" onClick={this.backLogin}>返回登录</div>
                    </div>
                </Form.Item>
            </Form>
            <div className="footer">react学习系统</div>
        </div>)
    }
}

export default RegisterForm