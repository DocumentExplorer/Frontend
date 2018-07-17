import React from 'react'
import './orders.css'
import { connect } from 'react-redux'
import { getOrders } from '../../../redux/actions'
import { Container, Row } from 'mdbreact'
import ApiHOC from '../../helpers/ApiHOC';
import OrdersListYear from './OrdersListYear'

class OrdersPage extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getOrders(() => {
            this.state = {

            }
        })
    }

    render() {
        return (
            <ApiHOC
                component={OrdersListYear}
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

const result = connect(mapStateToProps, { getOrders })(OrdersPage)
export { result as OrdersPage }