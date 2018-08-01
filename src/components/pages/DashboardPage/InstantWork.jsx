import React from 'react'
import { Card, CardBody, Row, Col } from 'mdbreact'

export default ({ lacks, changeLocation }) => (

    lacks.count !== 0 ?
        <Row className="custom-row">
            <Card style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', background: '#ef7070' }}>
                <CardBody>
                    <h4>Niekompletne zlecenia:</h4>
                    <br />
                    <h4>Pozostało: {lacks.count}</h4>
                    <Row>
                        {
                            lacks.orders.map((value, index) => (
                                <Col sm="12" onClick={() => changeLocation(value.orderId)} key={index}>
                                    Kliknij tutaj aby przejść do zlecenia: {value.count} (pozostało)
                            </Col>
                            ))
                        }
                    </Row>
                </CardBody>
            </Card>
        </Row>
        : ''
)