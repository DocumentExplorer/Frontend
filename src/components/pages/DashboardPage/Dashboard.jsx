import React from 'react'
import { Container, Row, Col } from 'mdbreact'
import './dashboard.css'
import OrderList from '../../Orders/OrderList'
import FindForm from '../../FindForm/FindForm'
import ApiHOC from '../../helpers/ApiHOC'
import { connect } from 'react-redux'
import FindedOrders from './FindedOrders'
import { Choose } from '../../helpers/Choose'
import { OnActionHOC } from '../../helpers/OnActionHOC'
import NewOrder from './NewOrder'
import { logout } from '../../../redux/actions'

class Dashboard extends React.Component {

    componentDidMount() {
        // console.log(Date.parse(localStorage.getItem('expiryAt')) - new Date().getTime())
        // if (Date.parse(localStorage.getItem('expiryAt')) - new Date().getTime() > 0) {
        //     let end = Date.parse(localStorage.getItem('expiryAt'))
        //     console.log('działa')
        //     console.log((end - new Date().getTime()) / 1000)
        //     setTimeout(() => {
        //         this.props.logout()
        //     }, (end - new Date().getTime()) / 1000)

        // } else {

        //     this.props.logout()
        // }
    }

    render() {
        return (
            <Container>
                <Row className="custom-row">
                    <NewOrder />
                </Row>
                <Row className="custom-row">
                    <Col md="9" sm="12">
                        <FindForm />
                        <Choose test={this.props.orders.choose} style={{ marginTop: '30px', marginBottom: '30px' }} />
                        <OnActionHOC
                            test={this.props.orders.choose}
                            component={
                                () =>
                                    <ApiHOC
                                        test={this.props.orders.finding}
                                        component={FindedOrders}
                                        data={this.props.orders.matchOrders}
                                    />
                            }
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


function mapStateToProps({ orders, loginResult }) {
    return {
        orders,
        loginResult
    }
}
const result = connect(mapStateToProps, { logout })(Dashboard)
export { result as Dashboard }