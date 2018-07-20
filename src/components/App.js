import React, { Component, Fragment } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import { LoginPage, Dashboard, OrderPage, OrdersPage, ManagementPage, UserPage } from './pages'
import { PrivateRoute } from './helpers/PrivateRoute'
import { AdminRoute } from './helpers/AdminRoute'
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
            <PrivateRoute path="/order/:order" component={OrderPage} />
            
            <AdminRoute path="/users/:user" component={UserPage}/>
            <AdminRoute path="/management" component={ManagementPage} />
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
