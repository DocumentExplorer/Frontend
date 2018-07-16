import React from 'react'
import { getOrders } from '../../redux/actions'
import { connect } from 'react-redux'
import ApiHOC from '../helpers/ApiHOC'

class OrderList extends React.Component {

    componentDidMount() {
        this.props.getOrders()
    }

    render() {
        console.log(this.props)
        return (
            <ApiHOC
                component={List}
                test={this.props.orders.waiting}
            />
        )
    }
}

const List = () => (
    <div>Działa</div>
)


function mapStateToProps({ orders }) {
    return {
        orders
    }
}

export default connect(mapStateToProps, { getOrders })(OrderList)


