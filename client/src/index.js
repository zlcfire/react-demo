import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import history from './utils/history'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import store from './store'

ReactDOM.render(
  // <Provider store={store}>
  <Router history={history}>
    <ConfigProvider locale={zh_CN}>
      <App />
    </ConfigProvider >
  </Router>
  // </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
