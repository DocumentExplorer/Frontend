import React from 'react'
import { Row, Card, CardBody, CardTitle, CardFooter, Button } from 'mdbreact'
import { Link } from 'react-router-dom'

export const Log = ({ log, history }) => (
    <Row className="custom-row">
        <Card style={{ width: '100%' }}>
            <CardBody>
                <CardTitle>
                    Rodzaj zdarznie - {log.event}
                </CardTitle>
                <CardTitle>
                    Data - {log.eventDate}
                </CardTitle>
                <CardTitle>
                    Właściciel -  {log.owner1Name}
                </CardTitle>
                <CardTitle>
                    Wykonawca - {log.username}
                </CardTitle>
            </CardBody>
            <CardFooter>
                <Button onClick={() => history.push(`/users/${log.username}`)}>Użytkownik</Button>
                <Button color="primary" onClick={() => history.push(`/order/${log.orderId}`)}>Szczegóły</Button>
            </CardFooter>
        </Card>
    </Row>
)