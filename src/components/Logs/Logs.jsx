import React from 'react'
import { Table } from 'mdbreact'
import { withRouter } from 'react-router-dom'
import { LogItem } from './LogItem';

export const Logs = ({ data, ...rest }) => (
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
                </tr>
            </thead>
            <tbody>
                {
                    data.map((value, index) => (
                        <LogItem value={value} index={index}  {...rest} />
                    ))
                }
            </tbody>
        </Table>
    </div>
)

export default withRouter(Logs)
