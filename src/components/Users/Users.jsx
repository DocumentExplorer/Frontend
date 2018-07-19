import React from 'react'
import { Table } from 'mdbreact'

export const Users = ({ data, ...rest }) => {
    console.log(rest)
    return (
        <div style={{display: 'block', maxHeight: '300px', overflowY: 'auto'}}>
            <Table responsiveMd>
                <thead className="mdb-color lighten-4 custom-users">
                    <tr>
                        <th>ID</th>
                        <th className="th-lg">Name</th>
                        <th className="th-lg">Surname</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((value, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{value.username}</td>
                                <td>{value.role}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Users
