import React, { Component, Fragment } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import { LoginPage, Dashboard, OrderPage, OrdersPage } from './pages'
import { PrivateRoute } from './helpers/PrivateRoute'
import { checkLogining } from '../redux/actions'
import { connect } from 'react-redux'
import './App.css'

class App extends Component {
  componentDidMount() {
    this.props.checkLogining()
  }
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Switch>
            <PrivateRoute path="/orders/:year" component={OrdersPage} />
            <PrivateRoute path="/orders/:id" component={OrderPage} />
            <PrivateRoute path="/management" component={OrderPage} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/orders" component={OrdersPage} />
            <Route path="/" component={LoginPage} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}


export default connect(undefined, { checkLogining })(App);
