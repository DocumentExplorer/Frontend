import React from 'react'
import './orders.css'
import { connect } from 'react-redux'
import { getOrders } from '../../../redux/actions'
import { Container, Row } from 'mdbreact'
import ApiHOC from '../../helpers/ApiHOC';
import OrdersListYear from './OrdersListYear'
import _ from 'lodash'
import DateFormat from '../../helpers/DateFormat';

class OrdersPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    componentDidMount() {
        const { match: { params: { year } } } = this.props
        this.setState({
            year
        })
        this.props.getOrders((data) => {
            const filtered = _.filter(data, (item) => {
                return year == item.time.year
            })
            this.setState({
                filtered
            })
        })
    }

    render() {
        return (
            <ApiHOC
                component={OrdersListYear}
                test={this.props.orders.waiting}
                data={this.state.filtered}
                year={this.state.year}
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