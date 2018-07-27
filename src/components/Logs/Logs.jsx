import React from 'react'
import { Table } from 'mdbreact'
import { Fa } from 'mdbreact'
import { withRouter } from 'react-router-dom'

export const Logs = ({ data, changeLocation, ...rest }) => {
    return (
        <div style={{ display: 'block', maxHeight: '300px', overflowY: 'auto', marginBottom: '30px' }}>
            <h3>Logi</h3>
            <Table className="users-list">
                <thead >
                    <tr>
                        <th>ID</th>
                        <th className="th-lg">Wydarzenie</th>
                        <th className="th-lg">Czas</th>
                        <th className="th-lg">Użytkownik</th>
                        <th className="th-lg">Właściciel</th>
                        <th className="th-lg">Czego dotyczy</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((value, index) => (
                            <tr key={index} className="user-list-item" onClick={() => changeLocation(value.id)}>
                                <td>{index}</td>
                                <td>
                                    {value.event}
                                </td>
                                <td>{value.eventDate}</td>
                                <td>{value.username}</td>
                                <td>{value.owner1Name}</td>
                                <td>{value.invoiceNumber}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default withRouter(Logs)
