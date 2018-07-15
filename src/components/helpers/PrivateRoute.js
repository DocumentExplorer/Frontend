import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        rest.loginResult.auth
            ? <Component {...props} />
            : <Redirect to='/' />
    )} />
)

function mapStateToProps({ loginResult }) {
    return {
        loginResult
    }
}

export default connect(mapStateToProps)(PrivateRoute)