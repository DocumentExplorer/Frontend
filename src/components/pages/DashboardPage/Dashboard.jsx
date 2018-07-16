import React from 'react'
import { Container, Row, Col } from 'mdbreact'
import './dashboard.css'
import OrderList from '../../Orders/OrderList'

class Dashboard extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9" sm="12">Test</Col>
                    <Col md="3" sm="12">
                        <OrderList />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export { Dashboard }