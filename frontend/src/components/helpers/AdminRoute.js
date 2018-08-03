import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


const AdminRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => (
            localStorage.getItem('role') === 'admin'
                ? <Component {...props} />
                : <Redirect to="/dashboard" />
        )} />
    )
}

function mapStateToProps({ loginResult }) {
    return {
        loginResult
    }
}

const priv = connect(mapStateToProps)(AdminRoute)
export { priv as AdminRoute }