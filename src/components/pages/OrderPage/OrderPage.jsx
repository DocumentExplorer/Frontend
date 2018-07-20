import React from 'react'
import './order.css'
import { Jumbotron } from '../../Jumbotron/Jumbotron';
import ApiHOC from '../../helpers/ApiHOC'
import { connect } from 'react-redux'
import { getUser } from '../../../redux/actions'

class OrderPage extends React.Component {

    render() {
        return (
            <div>Order</div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users
    }
}

const component = connect(mapStateToProps, { getUser })(OrderPage)
export { component as OrderPage }