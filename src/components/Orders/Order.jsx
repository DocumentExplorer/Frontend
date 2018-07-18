import React from 'react'
import { Card, CardBody, CardTitle, Fa } from 'mdbreact'
import { Link } from 'react-router-dom'

export const Order = ({ value, i, onClick, ...rest }) => {
    return (
        <Link to={`/orders/${value.invoiceNumber}`} {...rest}>
            <Card key={i} className="custom-card" onClick={() => onClick}>
                <CardBody>
                    <CardTitle>
                        <Fa icon="briefcase" />
                        Faktura numer - {value.invoiceNumber}
                    </CardTitle>
                    <CardTitle>
                        <Fa icon="address-card" />
                        NIP klienta - {value.clientNIP}
                    </CardTitle>
                    <CardTitle>
                        <Fa icon="address-card-o" />
                        NIP pośrednika - {value.brokerNIP}
                    </CardTitle>
                    <CardTitle>
                        <Fa icon="flag" />
                        Kraj klienta - {value.clientCountry}
                    </CardTitle>
                    <CardTitle>
                        <Fa icon="flag-o" />
                        Kraj pośrednika - {value.brokerCountry}
                    </CardTitle>
                </CardBody>
            </Card>
        </Link>
    )
}