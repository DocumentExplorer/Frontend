import React from 'react'
import { Container, Row, Col, Input, Button } from 'mdbreact';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../../redux/actions'
import ValidationError from '../../messages/ValidationError'
import './login.css'
import { LoginForm } from './LoginForm';

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            windowHeight: window.innerHeight,
            username: '',
            password: '',
            errors: {
                username: null,
                password: null
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value,

        })

    }

    handleBlur(event) {
        const { name, value } = event.target
        let errors = Object.assign({}, this.state.errors)
        if (name == 'username' && value.length >= 4) {
            errors.username = 'Username zawiera tylko 4 znaki'
        } else {
            errors.username = undefined
        }
        this.setState({
            errors
        })
    }

    handleSubmit(event) {
        this.props.login({
            username: this.state.username,
            password: this.state.password
        })
        event.preventDefault()
    }

    render() {

        const checkErrorForUsername = this.state.errors.username != undefined ? 'red-alert' : ''
        const checkErrorForPassword = this.state.errors.password != undefined ? 'red-alert' : ''

        if (this.props.loginResult.auth) {
            return <Redirect to="/dashboard" />
        }

        return (
            <Container>
                <Row>
                    <Col md="3"></Col>
                    <Col md="6">
                        <LoginForm
                            errors={this.state.errors}
                            handleBlur={this.handleBlur}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            checkErrorForUsername={checkErrorForUsername}
                            checkErrorForPassword={checkErrorForPassword}
                            windowHeight={this.state.windowHeight}
                        />
                        <ValidationError message={this.props.loginResult.loginResult} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps({ loginResult }) {
    return {
        loginResult
    }
}

const page = connect(mapStateToProps, { login })(Login)
export { page as LoginPage }