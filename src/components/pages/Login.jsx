import React from 'react'
import { reduxForm } from 'redux-form'
import { Container, Row, Col, Input, Button } from 'mdbreact';

class Login extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="3"></Col>
                    <Col md="6">
                        <form className="form-custom">
                            <p className="h5 text-center mb-4">Sign in</p>
                            <div className="grey-text">
                                <Input label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right" />
                                <Input label="Type your password" icon="lock" group type="password" validate />
                            </div>
                            <div className="text-center">
                                <Button>Login</Button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function validate(values) {

}

const LoginPage = reduxForm({
    form: 'login',
    validate
})(Login)

export { LoginPage }