import React from 'react'
import { Card, CardBody, CardTitle, Fa } from 'mdbreact'
import { Link } from 'react-router-dom'
import { getMonths } from '../../redux/mock/months'

export const Order = ({ value, i, onClick, color, ...rest }) => {
    const { date } = value
    
    return (
        <Link to={`/order/${value.invoiceNumber}`} {...rest} key={i}>
            <Card className="custom-card" onClick={() => onClick}
                style={{
                    borderTop: `20px solid ${color}`
                }}>
                <CardBody>
                    <CardTitle>
                        <Fa icon="file-o" />
                        Zlecenie numer - {value.orderNumber}
                    </CardTitle>
                    <CardTitle>
                        <Fa icon="briefcase" />
                        Faktura numer - {value.invoiceNumber}
                    </CardTitle>
                    <CardTitle>
                        <Fa icon="address-card" />
                        NIP klienta - {value.clientIdentificationNumber}
                    </CardTitle>
                    <CardTitle>
                        <Fa icon="address-card-o" />
                        NIP pośrednika - {value.brokerIdentificationNumber}
                    </CardTitle>
                    <CardTitle>
                        <Fa icon="flag" />
                        Kraj klienta - {value.clientCountry}
                    </CardTitle>
                    <CardTitle>
                        <Fa icon="flag-o" />
                        Kraj pośrednika - {value.brokerCountry}
                    </CardTitle>
                    <CardTitle>
                        <Fa icon="calendar" />
                        {date.day} {getMonths()[date.month - 1]} {date.year}
                    </CardTitle>
                </CardBody>
            </Card>
        </Link>
    )
}