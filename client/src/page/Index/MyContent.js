// 内容栏

import React from 'react'
import { Tabs, Carousel } from 'antd'
import './style.less'

const imgs = [
    `${process.env.REACT_APP_BASE_URL}/react-demo/client/src/assets/images/bg1.jpg`,
    `${process.env.REACT_APP_BASE_URL}/react-demo/client/src/assets/images/bg2.jpg`,
    `${process.env.REACT_APP_BASE_URL}/react-demo/client/src/assets/images/bg3.jpg`,
]

class MyContent extends React.Component {
    render() {
        const { panes = 3, activeMenu } = this.props
        return (<div className='content-container'>
            { panes.length ?
                (<Tabs>
                    { panes.map(item => (
                        <Tabs.TabPane>
                            <div className="tabpane-box">
                                {item.content}
                            </div>
                            {/* <Footer style={{ textAlign: 'center', background: '#fff' }}>
                                React-Admin @ {new Date().getFullYear()} Creacted by zlc
                    </Footer> */}
                        </Tabs.TabPane>
                    ))}
                </Tabs>) : (
                    <div className='bg-box'>
                        <Carousel className='bg-size' autoplay autoplaySpeed={5000}>
                            {imgs.map(item => (
                                <div className='bg-size' key={item}>
                                    <img src={item} alt="" style={{ width: '100%', height: '100%' }} />
                                </div>
                            ))}
                        </Carousel>
                    </div>
                )
            }
        </div>)
    }
}

export default MyContent