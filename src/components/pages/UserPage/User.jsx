import React from 'react'
import { Container } from 'mdbreact'
import { Jumbotron } from '../../Jumbotron/Jumbotron';
import { Button, Input } from 'mdbreact'

const User = ({ user, ...props }) => {

    return (
        <Container>
            <Jumbotron
                header={InformationAboutUser}
                body={ChangePassword}
                user={user}
            />
        </Container>
    )
}

const InformationAboutUser = ({ user }) => (
    <div className="information-user">
        <div className="group">
            <label>Username</label>
            <h3>{user.username}</h3>
        </div>
        <div className="group">
            <label>Rola</label>
            <h3>{user.role}</h3>
        </div>
    </div>
)

const ChangePassword = props => (
    <form>
        <Input label="Type your email" icon="envelope" group type="email" />
        <Input label="Type your password" icon="lock" group type="password" />
        <Button>Login</Button>
    </form>
)

export default User