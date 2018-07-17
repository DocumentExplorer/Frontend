import React from 'react'
import { Card, CardBody, CardTitle, Fa } from 'mdbreact'


export const Order = ({ value, key }) => {
    return (
        <Card key={key} className="custom-card">
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
    )
}