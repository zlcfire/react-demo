import React from 'react'
import { Form, Input, Row, Col } from 'antd'

class LoginForm extends React.Component {
    state = {
        code: '', //验证码
    }
    /**
     * 切换注册面板
     */
    goRigister = () => {
        this.props.toggleShow()
    }
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (<div>
            <h3 className="title">管理员登录</h3>
            <Form>
                <Form.Item>
                    <Input placeholder="用户名" />
                </Form.Item>
                <Form.Item>
                    <Input.Password placeholder="密码" />
                </Form.Item>
                <Form.Item>
                    <Row gutter={8}>
                        <Col span={15}>
                            <Input placeholder="验证码" />
                        </Col>
                        <Col span={9}></Col>
                    </Row>
                </Form.Item>
                <Form.Item>
                    <div>
                        <div>登录</div>
                        <div onClick={this.goRigister}>注册</div>
                    </div>
                </Form.Item>
            </Form>
            <div className="footer">react学习系统</div>
        </div>)
    }
}

export default LoginForm