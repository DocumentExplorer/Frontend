import React from 'react'
import { Card, CardBody, CardTitle, Fa } from 'mdbreact'
import { Link } from 'react-router-dom'

export const Order = ({ value, i, onClick, color, ...rest }) => {
    const { time } = value
    let renderTime
    if (time.day) {
        renderTime = () => (
            <React.Fragment>{time.day} {rest.month} {time.year}</React.Fragment>
        )
    } else {
        renderTime = () => (
            <React.Fragment>{time}</React.Fragment>
        )
    }
    return (
        <Link to={`/order/${value.invoiceNumber}`} {...rest} key={i}>
            <Card className="custom-card" onClick={() => onClick}
                style={{
                    borderTop: `20px solid ${color}`
                }}>
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
                    <CardTitle>
                        <Fa icon="calendar" />
                        {renderTime()}
                    </CardTitle>
                </CardBody>
            </Card>
        </Link>
    )
}