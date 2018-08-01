import React from 'react'
import { Card, CardBody, Row, Col } from 'mdbreact'

export default ({ lacks, changeLocation }) => (
    <Row className="custom-row">
        <Card style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', background: '#ef7070' }}>
            <CardBody>
                <h4>Do zrobienia pozostało: {lacks.count}</h4>
                <Row>
                    {
                        lacks.orders.map((value) => (
                            <Col sm="12" onClick={() => changeLocation(value.orderId)}>
                                Kliknij tutaj aby przejść do zlecenia: {value.count} (pozostało)
                            </Col>
                        ))
                    }
                </Row>
            </CardBody>
        </Card>
    </Row>
)