import React from 'react'
import { Col, Card, CardTitle, CardBody, CardFooter, CardHeader, Button } from 'mdbreact'
import _ from 'lodash'

export const FilesList = ({ names, files, requires }) => {
    console.log(names, files)
    let array = []
    for (let i = 0; i < 9; i++) {
        array.push(
            <File key={i}
                name={names[i]}
                file={files[i]}
                require={requires[i]}
            />
        )
    }
    return (
        <React.Fragment>
            {array.map((value) => (
                value
            ))}
        </React.Fragment>
    )
}

const File = ({ name, file, require }) => (
    <Col sm="6" md="4">
        <Card>
            <CardHeader>{name}</CardHeader>
            <CardBody></CardBody>
            <CardFooter>
                <Button>Pobierz</Button>
                <Button>Wyślij</Button>
            </CardFooter>
        </Card>
    </Col>
)