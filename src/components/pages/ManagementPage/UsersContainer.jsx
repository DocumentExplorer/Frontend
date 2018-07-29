import React, { Fragment } from 'react'
import { Users } from './Users'
import { FindUserForm } from './FindUser'

class UsersContainer extends React.Component {
    render() {
        return (
            <Fragment>
                <FindUserForm {...this.props} />
                <Users {...this.props} />
            </Fragment>
        )
    }
}

export default UsersContainer