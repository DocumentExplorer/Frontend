import React from 'react'
import { Card, CardBody } from 'mdbreact'

export const Choose = ({ test, ...rest }) => (
    test
        ?
        <Card {...rest}>
            <CardBody>
                <h5 className="text-center">Wpisz coś aby wyszukać</h5>
            </CardBody>
        </Card>
        : ''
)