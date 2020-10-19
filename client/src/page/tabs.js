// import React from 'react'
// import LoadableComponent from '../utils/LoadableComponent'
//const Test = React.lazy(() => import('./Test'));   //报错，就没用React.lazy了
// const ButtonDemo = LoadableComponent(import('./ButtonDemo/index'), true);
// const IconDemo = LoadableComponent(import('./IconDemo/index'), true);
// const FeedbackDemo = LoadableComponent(import('./FeedbackDemo/index'), true);
// const Users = LoadableComponent(import('./Users/index'), true);
// const Collection = LoadableComponent(import('./Collection/index'), true);
// const MessageBoard = LoadableComponent(import('./MessageBoard/index'), true);
// const Chat = LoadableComponent(import('./Chat/index'), true);
// const About = LoadableComponent(import('./About/index'), true);


const menu = [
    {
        name: 'antd',
        icon: 'antd-design',
        key: 'antd',
        children: [
            {
                name: '按钮',
                icon: '',
                key: 'ButtonDemo'
            },
            {
                name: '图标',
                icon: '',
                key: 'IconDemo'
            },
            {
                name: '反馈',
                icon: '',
                key: 'DeedbackDemo'
            }
        ]
    },
    {
        name: ''
    }
]

export {
    menu,
}