import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        true
            ? <Component {...props} />
            : <Component {...props} />
    )} />
)

function mapStateToProps({ loginResult }) {
    return {
        loginResult
    }
}

const priv = connect(mapStateToProps)(PrivateRoute)

export { priv as PrivateRoute }