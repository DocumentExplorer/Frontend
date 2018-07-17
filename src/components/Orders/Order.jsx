import React from 'react'
import { } from 'mdbreact'


const Order = (props) => {
    return (
        <Card style={{ width: '22rem', marginTop: '1rem' }}>
            <CardBody>
                <CardTitle>{props.invoiceNumbar}</CardTitle>
                <CardTitle tag="h6" sub className="mb-2 text-muted">Panel title</CardTitle>
                <CardText>Some quick example text to build on the panel title and make up the bulk of the panel's content. </CardText>
                <a href="#" className="card-link">Panel link</a>
                <a href="#" className="card-link">Another link</a>
            </CardBody>
        </Card>
    )
}