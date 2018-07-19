import React from 'react'
import { Table } from 'mdbreact'

export const Users = ({ data, ...rest }) => {
    console.log(rest)
    return (
        <Table>
            <thead className="mdb-color lighten-4">
                <tr>
                    <th>#</th>
                    <th className="th-lg">Name</th>
                    <th className="th-lg">Surname</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((value, index) => (
                        <tr>
                            <td>{value.username}</td>
                            <td>{value.role}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}

export default Users
