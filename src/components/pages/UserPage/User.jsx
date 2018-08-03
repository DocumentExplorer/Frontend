import React from 'react'
import { Container, Button, Input, Row } from 'mdbreact'
import { Jumbotron } from '../../Jumbotron/Jumbotron';
import { connect } from 'react-redux'
import { changePassword, clearValidation } from '../../../redux/actions'
import ValidationError from '../../messages/ValidationError'
import Success from '../../messages/Success'


class User extends React.Component {

    constructor() {
        super()
        this.state = {
            error: '',
            put_password: '',
            password: '',
            repeat_password: ''
        }
        this.onChange = this.onChange.bind(this)
        this.changePassword = this.changePassword.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            put_password: nextProps.users.put_password
        })
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
            this.props.changePassword(this.props.user.id, this.state.password, () => {
                setTimeout(() => {
                    this.props.clearValidation()
                }, 9000)
            })
            this.setState({
                error: '',
                password: '',
                repeat_password: ''
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
                        error={this.state.error}
                        message={this.state.put_password}
                        password={this.state.password}
                        repeat_password={this.state.repeat_password}
                        success={this.props.users.put_password_success}
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

const ChangePassword = props => {
    return (
        <React.Fragment>
            <form className="change-password">
                <h4>Zmiana hasła</h4>
                <Input name="password" label="Nowe hasło" group type="password" value={props.password} onChange={(e) => props.onChange(e)} />
                <Input name="repeat_password" label="Powtórz nowe hasło" group type="password" value={props.repeat_password} onChange={(e) => props.onChange(e)} />
                <Button color="primary" className="change-password-button" onClick={() => props.changePassword()}>Zmień hasło</Button>
            </form>
            {
                props.success ?
                    <Success message={props.message} />
                    : <ValidationError message={props.error} />
            }
        </React.Fragment>
    )
}

const mapStateTpProps = ({ users }) => {
    return {
        users
    }
}


export default connect(mapStateTpProps, { changePassword, clearValidation })(User)