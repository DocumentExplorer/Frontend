import React, { Fragment } from 'react'
import { Row, Input, Col, Button, Card, CardBody, CardHeader, Table } from 'mdbreact'

export const FindForm = ({ onClick, onChange, log }) => {
    return (
        <Fragment>
            <h2 style={{ marginBottom: '30px' }}>Szukanie logów</h2>
            <Card style={{ width: '100%' }}>
                <CardBody>
                    <Row>
                        <Col sm="12" md="4">
                            <Input name="event" label="Typ Zdarzenia" onChange={(e) => onChange(e)} value={log.event} />
                            <Input name="number" label="Numer zdarzenia" onChange={(e) => onChange(e)} value={log.number} />
                            <Input name="owner1Name" label="Właściciel" onChange={(e) => onChange(e)} value={log.owner1Name} />
                            <Input name="username" label="Dokonał zmiany" onChange={(e) => onChange(e)} value={log.username} />
                        </Col>
                        <Col sm="12" md="4">
                            <Input name="clientCountry" label="Kraj klienta" onChange={(e) => onChange(e)} value={log.clientCountry} />
                            <Input name="clientIdentificationNumber" label="NIP klienta" onChange={(e) => onChange(e)} value={log.clientIdentificationNumber} />
                            <Input name="brokerCountry" label="kraj pośrednika" onChange={(e) => onChange(e)} value={log.brokerCountry} />
                            <Input name="brokerIdentificationNumber" label="NIP pośrednika" onChange={(e) => onChange(e)} value={log.brokerIdentificationNumber} />
                        </Col>
                        <Col sm="12" md="4">
                            <Input name="invoiceNumber" label="Numer faktury" onChange={(e) => onChange(e)} value={log.invoiceNumber} />
                        </Col>
                        <Button
                            color="primary"
                            style={{ marginTop: '30px', marginBottom: '30px', marginLeft: '20px' }}
                            onClick={() => onClick()}>
                            Szukaj
                        </Button>
                    </Row>
                </CardBody>
            </Card>
        </Fragment>

    )
}

export const FindResult = ({ request, ...props }) => {
    console.log(props)
    return (
        request === true
            ? <div style={{ height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '50px', background: '#666666', fontSize: '25px' }}>Proszę coś wybrać</div>
            : <Result {...props} />
    )
}

const Result = ({ logs }) => (
    <Table className="custom-row">
        <thead>
            <tr>
                <th>#</th>
                <th>Zdarzenie</th>
                <th>Numer</th>
                <th>Właściciel</th>
                <th>Użytkownik</th>
                <th>Kraj klienta</th>
                <th>NIP klienta</th>
                <th>Kraj pośrednika</th>
                <th>NIP pośrednika</th>
                <th>Numer faktury</th>
            </tr>
        </thead>
        <tbody>
            {
                logs.map((value, index) => (
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{value.event}</td>
                        <td>{value.number}</td>
                        <td>{value.owner1Name}</td>
                        <td>{value.username}</td>
                        <td>{value.clientCountry}</td>
                        <td>{value.clientIdentificationNumber}</td>
                        <td>{value.brokerCountry}</td>
                        <td>{value.brokerIdentificationNumber}</td>
                        <td>{value.invoiceNumber}</td>
                    </tr>
                ))
            }
        </tbody>
    </Table>
)