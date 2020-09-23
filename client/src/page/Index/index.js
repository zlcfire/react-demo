import React from 'react'
import { Layout } from 'antd'
import MySider from './MySider'
import MyHeader from './MyHeader'
import MyContent from './MyContent'

const { Header, Content, Sider } = Layout;

class Index extends React.Component {
    // state = {}
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider><MySider /></Sider>
                <Layout>
                    <Header><MyHeader /></Header>
                    <Content><MyContent /></Content>
                </Layout>
            </Layout>

        )
    }
}

export default Index
