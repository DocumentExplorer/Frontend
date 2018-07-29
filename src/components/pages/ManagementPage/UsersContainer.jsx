import React, { Fragment } from 'react'
import { Users } from './Users'
import { FindUserForm } from './FindUser'
import { connect } from 'react-redux'
import _ from 'lodash'

class UsersContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            user: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            users: nextProps.data
        })
    }

    componentDidMount() {
        this.setState({
            users: this.props.data
        })
    }

    handleSearching(e) {
        let user = e.target.value
        this.setState({
            user
        })
        if (user !== '') {
            this.setState({
                users: _.filter(this.state.users, (value) => {
                    if (_.startsWith(value.username, user)) {
                        return value
                    }
                })
            })
        } else {
            this.setState({
                users: this.props.data
            })
        }
    }

    render() {

        return (
            <Fragment>
                <h2>Użytkownicy</h2>
                <FindUserForm handleSearching={this.handleSearching.bind(this)} value={this.state.user} />
                <Users {...this.props} users={this.state.users} dane="masło"/>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ users }) => {
    return {
        users
    }
}

export default connect()(UsersContainer)