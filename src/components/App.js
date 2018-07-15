import React, { Component, Fragment } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import { LoginPage } from './pages'
import PrivateRoute from './helpers/PrivateRoute'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Switch>
            <Route path="/" component={LoginPage} />
            <PrivateRoute path="/dashboard" component={} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
