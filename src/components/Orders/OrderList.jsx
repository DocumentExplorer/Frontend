import React from 'react'
import { getOrders } from '../../redux/actions'
import { connect } from 'react-redux'
import ApiHOC from '../helpers/ApiHOC'
import { List } from './List'
import { withRouter } from 'react-router-dom'

class OrderList extends React.Component {

    componentDidMount() {
        this.props.getOrders()
    }

    handleClick(year) {
        this.props.history.push(`/orders/${year}`)
    }

    render() {
        return (
            <ApiHOC
                component={List}
                test={this.props.orders.waiting}
                data={this.props.orders.data}
                handleClick={this.handleClick.bind(this)}
            />
        )
    }
}

function mapStateToProps({ orders }) {
    return {
        orders
    }
}

export default withRouter(connect(mapStateToProps, { getOrders })(OrderList))


