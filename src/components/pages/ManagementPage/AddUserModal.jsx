import React, { Fragment } from 'react'
import { Input } from 'mdbreact'

export const AddUserModal = ({ handleChange, ...props }) => (
    <Fragment>
        <Input name="username" label="Nazwa Użytkownika" icon="user" onChange={handleChange()}/>
        <Input name="password" label="Nazwa Użytkownika" icon="lock" onChange={handleChange()}/>
    </Fragment>
)
