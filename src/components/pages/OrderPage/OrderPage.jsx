import React from 'react'
import './order.css'
import ApiHOC from '../../helpers/ApiHOC'
import { connect } from 'react-redux'
import { getOrderById } from '../../../redux/actions'
import { Container } from 'mdbreact'
import { OrderInformation } from './OrderInformation'

class OrderPage extends React.Component {


    componentDidMount() {
        const { match: { params: { id } } } = this.props
        this.props.getOrderById(id)

    }

    render() {
        return (
            <Container>
                <ApiHOC
                    component={OrderInformation}
                    test={this.props.orders.getOrderRequest}
                    order={this.props.orders.order}
                    style={{ width: '100%', marginTop: '50px', textAlign: 'center' }}
                />
            </Container>
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