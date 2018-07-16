import React, { Component, Fragment } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import { LoginPage, Dashboard, OrderPage, OrdersPage } from './pages'
import { PrivateRoute } from './helpers/PrivateRoute'

class App extends Component {
  componentDidMount() {
    console.log('upadte')
  }
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Switch>
            <PrivateRoute path="/orders/:id" component={OrderPage} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/orders" component={OrdersPage} />
            <Route path="/" component={LoginPage} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
