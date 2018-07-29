import React, { Fragment } from 'react'
import { Table, Col } from 'mdbreact'

export const UpdatePermissions = ({ permissions, handleChange }) => (
    <Fragment>
        <Table>
            <thead>
                <tr>
                    <td>Typ</td>
                    <td>Użytkownik</td>
                    <td>Competent</td>
                </tr>
            </thead>
            <tbody>
                {
                    Object.keys(permissions).map((value) => (
                        <tr key={value}>
                            <td>
                                {value}
                            </td>
                            <td>
                                {
                                    permissions[value] === 'user' ?
                                        <input
                                            type="radio"
                                            onChange={handleChange}
                                            value="user"
                                            name={value}
                                            defaultChecked
                                        />
                                        : <input
                                            type="radio"
                                            onChange={handleChange}
                                            value="user"
                                            name={value}
                                        />
                                }
                            </td>
                            <td>
                                {
                                    permissions[value] === 'competent' ?
                                        <input
                                            type="radio"
                                            onChange={handleChange}
                                            value="competent"
                                            name={value}
                                            defaultChecked
                                        />
                                        : <input
                                            type="radio"
                                            onChange={handleChange}
                                            value="competent"
                                            name={value}
                                        />
                                }
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    </Fragment>
)