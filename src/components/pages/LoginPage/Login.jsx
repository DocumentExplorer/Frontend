import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Container, Row, Col, Input, Button } from 'mdbreact';
import './login.css'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            windowHeight: window.innerHeight
        }
    }

    onSubmit(values) {

    }

    renderInput(field) {
        const { meta: { touched, error } } = field

        return (
            <Input label={field.label} icon={field.icon} group type={field.type} validate error="wrong" success="right" />
        )

    }

    componentDidMount() {
        console.log(this.state.windowHeight)
    }

    render() {
        const { handleSubmit } = this.props
        return (
            <Container>
                <Row>
                    <Col md="3"></Col>
                    <Col md="6">
                        <form className="login-form" style={{ paddingTop: this.state.windowHeight / 4 + 'px' }}
                            onSubmit={handleSubmit(this.onSubmit.bind(this))} noValidate
                        >
                            <p className="h3 text-center mb-4">Logowanie</p>
                            <div className="grey-text">
                                <Field name="username" label="Type your username" icon="envelope" type="text" error="wrong" success="right" component={this.renderInput.bind(this)} />
                                <Field name="password" label="Type your password" icon="lock" type="password" component={this.renderInput.bind(this)}/>
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
    return values
}

const LoginPage = reduxForm({
    form: 'login',
    validate: validate
})(Login)

export { LoginPage }