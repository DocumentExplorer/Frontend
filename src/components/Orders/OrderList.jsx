import React from 'react'
import { getOrders } from '../../redux/actions'
import { connect } from 'react-redux'
import ApiHOC from '../helpers/ApiHOC'
import List from './List'

class OrderList extends React.Component {

    componentDidMount() {
        this.props.getOrders()
    }

    render() {
        return (
            <ApiHOC
                component={List}
                test={this.props.orders.waiting}
            />
        )
    }
}

function mapStateToProps({ orders }) {
    return {
        orders
    }
}

export default connect(mapStateToProps, { getOrders })(OrderList)


