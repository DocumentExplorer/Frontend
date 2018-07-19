import React, { Fragment } from 'react'
import { Input, Fa } from 'mdbreact'

export const AddUserModal = ({ handleChange, ...props }) => (
    <Fragment>
        <Input name="username" label="Nazwa Użytkownika" icon="user" onChange={(e) => handleChange(e)} />
        <Input name="password" label="Hasło" icon="lock" onChange={(e) => handleChange(e)} />
        <div className="account-type">
            <label>Typ konta</label>
            <select className="browser-default">
                <option value="1">Admin</option>
                <option value="2">Role</option>
            </select>
        </div>
    </Fragment>
)
