import React, { Fragment } from 'react'
import { Input } from 'mdbreact'

export const AddUserModal = ({ hanelChange, ...props }) => (
    <Fragment>
        <Input name="username" label="Nazwa Użytkownika" icon="user" onChange={hanelChange()}/>
        <Input name="password" label="Nazwa Użytkownika" icon="lock" onChange={hanelChange()}/>
    </Fragment>
)
