import React from 'react'
import { Order } from '../../Orders/Order'
import { withRouter } from 'react-router-dom'

class FindedOrders extends React.Component {
    render() {
        const { data } = this.props
        return (
            <div style={{ marginTop: '35px' }}>
                {
                    data.map((value, i) => (
                        <Order value={value} key={i} />
                    ))
                }
            </div>
        )
    }
}

export default withRouter(FindedOrders)