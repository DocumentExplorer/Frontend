import React from 'react'
import { Table } from 'mdbreact'
import { Fa } from 'mdbreact'

export const Users = ({ data, ...rest }) => {
    console.log(rest)
    return (
        <div style={{ display: 'block', maxHeight: '300px', overflowY: 'auto', marginBottom: '30px' }}>
            <Table className="users-list">
                <thead >
                    <tr>
                        <th>ID</th>
                        <th className="th-lg">Nazwa Użytkownika</th>
                        <th className="th-lg">Rola</th>
                        <th className="th-lg">Usuń</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((value, index) => (
                            <tr key={index} className="user-list-item">
                                <td>{index}</td>
                                <td>{value.username}</td>
                                <td>{value.role}</td>
                                <td className="delete">
                                    <Fa icon="close" size="2x" />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Users
