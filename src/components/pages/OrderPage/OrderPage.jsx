import React from 'react'
import './order.css'
import ApiHOC from '../../helpers/ApiHOC'
import { connect } from 'react-redux'
import { getOrderById } from '../../../redux/actions'

class OrderPage extends React.Component {

    componentDidMount() {
        const { match: { params: { id } } } = this.props
        this.props.getOrderById(id)
    }

    render() {
        console.log(this.props)
        return (
            <div>Order</div>
        )
    }
}

function mapStateToProps({ orders }) {
    return {
        orders
    }
}

const component = connect(mapStateToProps, { getOrderById })(OrderPage)
export { component as OrderPage }