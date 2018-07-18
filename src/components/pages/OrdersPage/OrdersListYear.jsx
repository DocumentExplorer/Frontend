import React from 'react'
import _ from 'lodash'
import { convertToNumbers } from '../../helpers/DateFormat';
import { Container, Row, Col, Card, CardBody, CardTitle } from 'mdbreact'
import { Order } from '../../Orders/Order'

export default ({ data }) => {
    const months = []
    for (let i = 1; i <= 12; i++) {
        months.push({
            month: i,
            ordersByMonth: []
        })
    }
    _.forEach(data, (value) => {
        let { day, month, year } = value.time
        const converted = convertToNumbers(day, month, year)
        value.time = converted
        _.forEach(months, (month) => {
            if (month.month === value.time.month) {
                month.ordersByMonth.push(value)
            }
        })
    })
    return (
        <Container>
            <Row>
                {
                    months.map((value, i) => (
                        <Col key={i} md="12">
                            <Card>
                                <CardBody>
                                    <CardTitle>
                                        {value.month}
                                    </CardTitle>
                                </CardBody>
                            </Card>
                            <Row>
                                {
                                    value.ordersByMonth.map((item, index) => (

                                        <Col md="6" sm="12">
                                            <Order
                                                key={index}
                                                value={item}
                                            />
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}


