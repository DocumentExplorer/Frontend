import React from 'react'
import ApiHOC from '../../helpers/ApiHOC'
import { connect } from 'react-redux'
import { getUser } from '../../../redux/actions'
import User from './User'

class UserPage extends React.Component {

    constructor() {
        super()
    }

    componentDidMount() {
        const { match: { params: { username } } } = this.props
        this.props.getUser(username)
    }

    render() {
        console.log(this.props)
        return (
            <ApiHOC
                test={this.props.users.requestUser}
                component={User}
                user={this.props.users.user}
            />
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users
    }
}

const component = connect(mapStateToProps, { getUser })(UserPage)
export { component as UserPage }