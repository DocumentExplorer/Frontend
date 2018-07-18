import React from 'react'
import _ from 'lodash'
import { convertToNumbers } from '../../helpers/DateFormat';
import { Container, Row, Col, Card, CardBody, CardTitle } from 'mdbreact'
import { Order } from '../../Orders/Order'
import { getMonths } from '../../../redux/mock/months'
import randomcolor from 'randomcolor'

export default ({ data, year }) => {
    const months = []
    const names = getMonths()
    for (let i = 1; i <= 12; i++) {
        months.push({
            month: i,
            color: randomcolor({
                hue: 'green'
            }),
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
        <Container className="custom-row">
            <h1 className="text-center">{year}</h1>
            <Row>
                {
                    months.map((value, i) => (
                        <Col key={i} md="12">
                            <Card className="month">
                                <CardBody>
                                    <CardTitle>
                                        {names[value.month - 1]}
                                    </CardTitle>
                                </CardBody>
                            </Card>
                            <Row>
                                {
                                    value.ordersByMonth.map((item, index) => (

                                        <Col md="6" sm="12" key={index}>
                                            <Order
                                                value={item}
                                                color={value.color}
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


