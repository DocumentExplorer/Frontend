import React from 'react'
import { Row, Card, CardBody, CardTitle, Fa } from 'mdbreact'
import _ from 'lodash'

export const OrderInformation = ({ order, ...props }) => {
    return (
        <Row>
            <Card {...props}>
                <CardBody>
                    <CardTitle>
                        <Fa icon="file-o" />
                        Zlecenie numer - {order.number}
                    </CardTitle>
                    <CardTitle>
                        <Fa icon="briefcase" />
                        Faktura numer - {order.invoiceNumber}
                    </CardTitle>
                    <CardTitle>
                        <Fa icon="address-card" />
                        NIP klienta - {order.clientIdentificationNumber}
                    </CardTitle>
                    <CardTitle>
                        <Fa icon="address-card-o" />
                        NIP pośrednika - {order.brokerIdentificationNumber}
                    </CardTitle>
                    <CardTitle>
                        <Fa icon="flag" />
                        Kraj klienta - {order.clientCountry}
                    </CardTitle>
                    <CardTitle>
                        <Fa icon="flag-o" />
                        Kraj pośrednika - {order.brokerCountry}
                    </CardTitle>
                    <CardTitle>
                        <Fa icon="calendar" />
                        {order.date}
                    </CardTitle>
                </CardBody>
            </Card>
        </Row>
    )
}