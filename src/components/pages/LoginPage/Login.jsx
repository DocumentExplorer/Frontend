import React, { Fragment } from 'react'
import { Container, Row, Col, Input, Button } from 'mdbreact';
import './login.css'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            windowHeight: window.innerHeight,
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name } = event.target
        this.setState({
            [name]: event.target.value
        })
    }

    handleSubmit(event) {
        console.log(this.state)
        event.preventDefault()
    }

    componentDidMount() {
        console.log(this.state.windowHeight)
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md="3"></Col>
                    <Col md="6">
                        <form className="login-form" style={{ paddingTop: this.state.windowHeight / 4 + 'px' }}
                            onSubmit={this.handleSubmit}
                        >
                            <p className="h3 text-center mb-4">Logowanie</p>
                            <div className="grey-text">
                                <Input name="username" label="Username" icon="user" type="text" onChange={this.handleChange} />
                                <Input name="password" label="Hasło" icon="lock" type="password" onChange={this.handleChange} />
                            </div>
                            <div className="text-center">
                                <Button type="submit">Login</Button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function validate(values) {
    console.log(values)
    const errors = {}
    if (values.username < 6) {
        errors.username = "Must be more longer"
    }
    console.log(errors)
    return errors
}

export { Login as LoginPage }