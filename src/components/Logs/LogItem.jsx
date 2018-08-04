import React from 'react'

export const LogItem = ({ index, changeLocation, value, ...rest }) => (
    <tr key={index} className="user-list-item" onClick={() => changeLocation(value.id)}>
        <td>{index}</td>
        <td>
            {value.event}
        </td>
        <td>{value.eventDate}</td>
        <td>{value.username}</td>
        <td>{value.owner1Name}</td>
    </tr>
)