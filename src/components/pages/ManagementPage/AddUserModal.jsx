import React, { Fragment } from 'react'
import { Input, Fa } from 'mdbreact'
import Select from 'react-select-me'

const options = [
    { value: 'Admin', label: 'Admin' },
    { value: 'User', label: 'User' },
];

export const AddUserModal = ({ handleChange, handleSelect, role, ...props }) => {
    return (
        <Fragment>
            <Input name="username" label="Nazwa Użytkownika" icon="user" onChange={(e) => handleChange(e)} />
            <Input name="password" label="Hasło" icon="lock" onChange={(e) => handleChange(e)} />
            <div className="account-type">
                <label>Typ konta</label>
                <Select
                    options={options}
                    onChange={(role) => handleSelect(role)}
                    value={role}
                />
            </div>
        </Fragment>
    )
}
