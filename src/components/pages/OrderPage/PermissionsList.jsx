import React from 'react'
import { Row, Card, CardHeader, CardBody } from 'mdbreact'

export const PermissionsList = ({ permissions }) => {
    let account = localStorage.getItem('role')
    let array = []
    Object.keys(permissions).map((value) => {
        if (permissions[value] == account) {
            array.push(value)
        }
    })
    return (
        <Row>
            <Card className="custom-row" style={{ background: 'yellow', width: '90%', marginLeft: 'auto', marginRight: 'auto' }}>
                <CardHeader>Uwaga!!!</CardHeader>
                <CardBody>
                    Drogi użytkowniku masz możliwość modyfikacji tylko tych plików:
                    <ul>
                        {
                            array.map((value, index) => (
                                <li key={index}>{value}</li>
                            ))
                        }
                    </ul>
                </CardBody>
            </Card>
        </Row>
    )
}