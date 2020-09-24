import React from 'react'
import { Form, Input, Row, Col } from 'antd'
import { withRouter } from 'react-router-dom'

@withRouter
class LoginForm extends React.Component {
    state = {
        code: '', //验证码
    }
    /**
     * 切换注册面板
     */
    onSubmit = () => {
        console.log(this.props.match)
        this.props.history.push('/')
        // browserHistory.push('/')
    }
    goRigister = () => {
        // this.props.form.resetFields()
        this.props.toggleShow()
    }
    componentDidMount() {
    }
    render() {
        return (<div>
            <h3 className="title">管理员登录</h3>
            <Form>
                <Form.Item>
                    <Input className="myInput" placeholder="用户名" />
                </Form.Item>
                <Form.Item>
                    <Input type="password" className="myInput" placeholder="密码" />
                </Form.Item>
                <Form.Item>
                    <Row gutter={8}>
                        <Col span={15}>
                            <Input className="myInput" placeholder="验证码" />
                        </Col>
                        <Col span={9}></Col>
                    </Row>
                </Form.Item>
                <Form.Item>
                    <div className="btn-box">
                        <div className="loginBtn" onClick={this.onSubmit}>登录</div>
                        <div className="registerBtn" onClick={this.goRigister}>注册</div>
                    </div>
                </Form.Item>
            </Form>
            <div className="footer">react学习系统</div>
        </div>)
    }
}

export default LoginForm