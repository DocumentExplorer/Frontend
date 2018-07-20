import React from 'react'

class User extends React.Component {
    constructor() {
        super()
    }

    componentDidMount() {
        this.setState({
            user: this.props.user
        })
    }

    render() {
        return (
            <div>
                {this.props.user.username}
            </div>
        )
    }
}

export default User