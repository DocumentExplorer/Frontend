import React from 'react'
import { Card, CardBody, CardTitle, Fa } from 'mdbreact'
import { Link } from 'react-router-dom'
import { getMonths } from '../../redux/mock/months'

export const Order = ({ value, i, onClick, color, ...rest }) => {
    const { time } = value
    
    return (
        <Link to={`/order/${value.invoiceNumber}`} {...rest} key={i}>
            <Card className="custom-card" onClick={() => onClick}
                style={{
                    borderTop: `20px solid ${color}`
                }}>
                <CardBody>
                    <CardTitle>
                        <Fa icon="file-o" />
                        Faktura numer - {value.orderNumber}
                    </CardTitle>
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
                    <CardTitle>
                        <Fa icon="calendar" />
                        {time.day} {getMonths()[time.month - 1]} {time.year}
                    </CardTitle>
                </CardBody>
            </Card>
        </Link>
    )
}