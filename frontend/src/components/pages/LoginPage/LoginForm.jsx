import React from 'react'
import { Input, Button } from 'mdbreact'

export const LoginForm = ({ handleSubmit, handleChange, handleBlur, errors, ...props }) => (
    <form className="login-form" style={{ paddingTop: props.windowHeight / 4 + 'px' }}
        onSubmit={(e) => handleSubmit(e)}
    >
        <p className="h3 text-center mb-4">Logowanie</p>
        <div className="grey-text">
            <Input name="username" label="Username" icon="user" type="text"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
                className={props.checkErrorForUsername}
            />
            <p className="warning">{errors.username}</p>
            <Input name="password" label="Hasło" icon="lock" type="password"
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
                className={props.checkErrorForPassword}
            />
            <p className="warning">{errors.password}</p>
        </div>
        <div className="text-center">
            <Button type="submit">Login</Button>
        </div>
    </form>
)