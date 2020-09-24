import React from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom'
import Login from './page/Login'
import Index from './page/Index'
import PrivateRoute from './components/PrivateRoute'

@withRouter
class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/" component={Index} />
      </Switch>
    );
  }
}

// export default withRouter(App);
export default App;

