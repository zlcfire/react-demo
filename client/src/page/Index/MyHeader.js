// 头部栏

import { Avatar, Icon, Menu } from 'antd'
import React from 'react'
import ColorPicker from '@/components/ColorPicker/index'

class MyHeader extends React.Component {
    render() {
        return (<div style={{ background: '#fff', padding: '0 16px' }}>
            <Icon style={{ fontSize: 18 }} />
            <div>
                <div><ColorPicker /></div>
                {/* <div><MyIcon /></div> */}
                <div>
                    <Menu mode="horizontal">
                        <Menu.SubMenu title={<div><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /><span>admin</span></div>}>
                            <Menu.ItemGroup title="用户中心">
                                <Menu.Item>编辑个人信息</Menu.Item>
                                <Menu.Item>修改密码</Menu.Item>
                                <Menu.Item>退出登录</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup title="设置中心">
                                <Menu.Item>切换全屏</Menu.Item>
                                <Menu.Item>恢复默认主题</Menu.Item>
                            </Menu.ItemGroup>
                        </Menu.SubMenu>
                    </Menu>
                </div>
            </div>
            {/* 放置弹框 */}
        </div>)
    }
}

export default MyHeader