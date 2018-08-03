import React from 'react'
import { Order } from '../../Orders/Order'
import { withRouter } from 'react-router-dom'

const FindedOrders = ({ data }) => (
    <div style={{ marginTop: '35px' }}>
        {
            data.map((value, i) => (
                <Order value={value} key={i} />
            ))
        }
    </div>
)

export default withRouter(FindedOrders)