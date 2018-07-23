import React from 'react'
import { Container, Button, Input, Row } from 'mdbreact'
import { Jumbotron } from '../../Jumbotron/Jumbotron';
import { connect } from 'react-redux'
import { changePassword } from '../../../redux/actions'


class User extends React.Component {

    constructor() {
        super()
        this.onChange = this.onChange.bind(this)
        this.changePassword = this.changePassword.bind(this)
    }

    onChange(e) {
        let { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    changePassword() {
        let { password, repeat_password } = this.state
        if (password.length === 0) {
            this.setState({
                error: 'Nie może być puste'
            })
        } else if (password !== repeat_password) {
            this.setState({
                error: 'Hasła różnią się od siebie'
            })
        } else {
            this.props.changePassword(this.props.user.id, this.state.password)
            this.setState({
                error: ''
            })
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Jumbotron
                        header={InformationAboutUser}
                        body={ChangePassword}
                        user={this.props.user}
                        changePassword={this.changePassword}
                        onChange={this.onChange}
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
    <form className="change-password">
        <h4>Zmiana hasła</h4>
        <Input name="password" label="Nowe hasło" group type="password" onChange={(e) => props.onChange(e)} />
        <Input name="repeat_password" label="Powtórz nowe hasło" group type="password" onChange={(e) => props.onChange(e)} />
        <Button color="primary" className="change-password-button" onClick={() => props.changePassword()}>Zmień hasło</Button>
    </form>
)

const mapStateTpProps = ({ users }) => {
    return {
        users
    }
}


export default connect(mapStateTpProps, { changePassword })(User)