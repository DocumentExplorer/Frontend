import React from 'react'
import { Container, Button, Input, Row } from 'mdbreact'
import { Jumbotron } from '../../Jumbotron/Jumbotron';


class User extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Jumbotron
                        header={InformationAboutUser}
                        body={ChangePassword}
                        user={this.props.user}
                    />
                </Row>
            </Container>
        )
    }
}

const InformationAboutUser = ({ user }) => (
    <div className="information-user">
        <div className="group">
            <h3>Username:</h3>
            <h3>{user.username}</h3>
        </div>
        <div className="group">
            <h3>Rola: </h3>
            <h3>{user.role}</h3>
        </div>
    </div>
)

const ChangePassword = props => (
    <form>
        <Input label="Stare hasło" group type="password" />
        <Input label="Nowe hasło" group type="password" />
        <Input label="Powtórz nowe hasło" group type="password" />
        <Button color="primary" className="change-password-button">Zmień hasło</Button>
    </form>
)

export default User