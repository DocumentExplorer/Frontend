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
import { logout, getLacks } from '../../../redux/actions'
import InstantWork from './InstantWork';
import { withRouter } from 'react-router-dom'

class Dashboard extends React.Component {

    constructor() {
        super()
        this.changeLocation = this.changeLocation.bind(this)
    }

    componentDidMount() {
        this.props.getLacks()
    }

    changeLocation(id) {
        this.props.history.push(`/order/${id}`)
    }

    render() {
        return (
            <Container>
                <ApiHOC
                    test={this.props.lacks.requestLacks}
                    component={InstantWork}
                    lacks={this.props.lacks.lacks}
                    changeLocation={this.changeLocation}
                />
                {
                    localStorage.getItem('role') == 'complementer'
                        ? ''
                        : <Row className="custom-row">
                            <NewOrder />
                        </Row>
                }

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


function mapStateToProps({ orders, loginResult, lacks }) {
    return {
        orders,
        loginResult,
        lacks
    }
}
const result = withRouter(connect(mapStateToProps, { logout, getLacks })(Dashboard))
export { result as Dashboard }