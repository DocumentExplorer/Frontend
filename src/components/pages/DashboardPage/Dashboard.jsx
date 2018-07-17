import React from 'react'
import { Container, Row, Col } from 'mdbreact'
import './dashboard.css'
import OrderList from '../../Orders/OrderList'
import FindForm from '../../FindForm/FindForm'
class Dashboard extends React.Component {
    render() {
        return (
            <Container>
                <Row className="custom-row">
                    <Col md="9" sm="12">
                        <FindForm />
                    </Col>
                    <Col md="3" sm="12">
                        <OrderList />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export { Dashboard }