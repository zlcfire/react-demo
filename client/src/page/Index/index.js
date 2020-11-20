import React from 'react'
import { Layout } from 'antd'
import MySider from './MySider'
import MyHeader from './MyHeader'
import MyContent from './MyContent'
import { getUser, initWebCocket } from '@/store/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const { Header, Content, Sider } = Layout;

const store = connect((state) => ({ user: state.user, Websocket: state.Websocket }), (dispatch) => bindActionCreators({ getUser, initWebCocket }, dispatch))

@store
class Index extends React.Component {
    state = {
        collapsed: false,
        panes: [],
        activeMenu: '',
        theme: localStorage.getItem('theme') || 'dark'
    }

    componentDidMount() {
        this.init()
    }

    init = async () => {
        const username = localStorage.getItem('username')
        await this.props.getUser({ username })
        this.props.initWebCocket(this.props.user)
    }
    _setState = (obj) => {
        this.setState(obj)
    }

    render() {
        const { collapsed, panes, activeMenu, theme } = this.state
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider trigger={null} collapsible collapsed={collapsed} theme={theme}>
                    <MySider theme={theme} panes={panes} activeMenu={activeMenu} onChangeState={this._setState} />
                </Sider>
                <Layout>
                    <Header style={{ padding: 0 }}><MyHeader theme={theme} collapsed={collapsed} onChangeState={this._setState} /></Header>
                    <Content><MyContent panes={panes} activeMenu={activeMenu} onChangeState={this._setState} /></Content>
                </Layout>
            </Layout>

        )
    }
}

export default Index
