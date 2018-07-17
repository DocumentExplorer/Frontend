import React from 'react'
import { Container, Row, Col } from 'mdbreact'
import './dashboard.css'
import OrderList from '../../Orders/OrderList'
import FindForm from '../../FindForm/FindForm'
import ApiHOC from '../../helpers/ApiHOC'
import { connect } from 'react-redux'
import FindedOrders from './FindedOrders'
import { Choose } from '../../helpers/Choose'

class Dashboard extends React.Component {
    render() {
        console.log(this.props.orders)
        return (
            <Container>
                <Row className="custom-row">
                    <Col md="9" sm="12">
                        <FindForm />
                        <Choose test={this.props.orders.choose} style={{marginTop: '30px',marginBottom: '30px'}}/>
                        <ApiHOC
                            test={this.props.orders.finding}
                            component={FindedOrders}
                            data={this.props.orders.matchOrders}
                        />
                    </Col>
                    <Col md="3" sm="12">
                        <OrderList />
                    </Col>
                </Row>
            </Container>
        )
    }
}
function mapStateToProps({ orders }) {
    return {
        orders
    }
}
const result = connect(mapStateToProps)(Dashboard)
export { result as Dashboard }