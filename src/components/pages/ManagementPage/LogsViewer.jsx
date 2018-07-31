import React, { Fragment } from 'react'
import { Row, Input, Col, Button, Card, CardBody, CardHeader } from 'mdbreact'

export const FindForm = ({ onClick, onChange }) => {
    return (
        <Fragment>
            <h2 style={{ marginBottom: '30px' }}>Szukanie logów</h2>
            <Card style={{ width: '100%' }}>
                <CardBody>
                    <Row>
                        <Col sm="12" md="4">
                            <Input name="event" label="Typ Zdarzenia" />
                            <Input name="number" label="Numer zdarzenia" />
                            <Input name="owner1Name" label="Właściciel" />
                            <Input name="username" label="Dokonał zmiany" />

                        </Col>
                        <Col sm="12" md="4">
                            <Input name="clientCountry" label="Kraj klienta" />
                            <Input name="clientIdentificationNumber" label="NIP klienta" />
                            <Input name="brokerCountry" label="kraj pośrednika" />
                            <Input name="brokerIdentificationNumber" label="NIP pośrednika" />
                        </Col>
                        <Col sm="12" md="4">
                            <Input name="invoiceNumber" label="Numer faktury" />

                        </Col>
                        <Button color="primary" style={{ marginTop: '30px', marginBottom: '30px', marginLeft: '20px' }}>Szukaj</Button>
                    </Row>
                </CardBody>
            </Card>
        </Fragment>

    )
}

export const FindResult = () => (
    <div></div>
)