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
                            <label htmlFor="event" className="grey-text">Typ zdarznia</label>
                            <input id="event" name="event" label="Typ Zdarzenia" onChange={(e) => onChange(e)} value={log.event} className="form-control" />
                            <label htmlFor="number" className="grey-text">Numer zlecenia</label>
                            <input id="number" name="number" label="Numer zdarzenia" onChange={(e) => onChange(e)} value={log.number} className="form-control" />
                            <label htmlFor="owner1Name" className="grey-text">Właściciel</label>
                            <input id="owner1Name" name="owner1Name" label="Właściciel" onChange={(e) => onChange(e)} value={log.owner1Name} className="form-control" />
                            <label htmlFor="username" className="grey-text">Dokonał zmiany</label>
                            <input id="username" name="username" onChange={(e) => onChange(e)} value={log.username} className="form-control" />
                        </Col>
                        <Col sm="12" md="4">
                            <label htmlFor="clientCountry" className="grey-text">Kraj klienta</label>
                            <input id="clientCountry" name="clientCountry" className="form-control" onChange={(e) => onChange(e)} value={log.clientCountry} />
                            <label htmlFor="clientIdentificationNumber" className="grey-text">NIP klienta</label>
                            <input id="clientIdentificationNumber" className="form-control" name="clientIdentificationNumber" onChange={(e) => onChange(e)} value={log.clientIdentificationNumber} />
                            <label htmlFor="brokerCountry" className="grey-text">Kraj pośrednika</label>
                            <input id="brokerCountry" name="brokerCountry" className="form-control" onChange={(e) => onChange(e)} value={log.brokerCountry} />
                            <label htmlFor="brokerIdentificationNumber" className="grey-text">NIP pośrednika</label>
                            <input id="brokerIdentificationNumber" className="form-control" name="brokerIdentificationNumber" onChange={(e) => onChange(e)} value={log.brokerIdentificationNumber} />
                        </Col>
                        <Col sm="12" md="4">
                            <label id="invoiceNumber" htmlFor="invoiceNumber" className="grey-text">Numer faktury</label>
                            <input name="invoiceNumber" className="form-control" onChange={(e) => onChange(e)} value={log.invoiceNumber} />
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

    return (
        request === true
            ? <div style={{ height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '50px', background: '#666666', fontSize: '25px' }}>Proszę coś wybrać</div>
            : <Result {...props} />
    )
}

const Result = ({ logs, changeLocation }) => (
    <Table className="custom-row logs-table">
        <thead>
            <tr>
                <th>#</th>
                <th>Zdarzenie</th>
                <th>Data</th>
                <th>Numer zlecenia</th>
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
                    <tr key={index} onClick={() => changeLocation(value.orderId, value.event)}>
                        <td>{index}</td>
                        <td>{value.event}</td>
                        <td>{value.eventDate}</td>
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