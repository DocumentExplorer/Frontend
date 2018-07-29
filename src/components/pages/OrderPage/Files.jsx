import React from 'react'
import { Col, Card, CardTitle, CardBody, CardFooter, CardHeader, Button } from 'mdbreact'
import _ from 'lodash'

export const FilesList = ({ files, requires }) => {
    console.log(files, requires)
    let array = []
    for (let i = 0; i < 9; i++) {
        array.push(
            <File
                key={i}
                file={files[i]}
                isRequired={requires[i]}
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

const File = ({ file, isRequired }) => {
    console.log(file, isRequired)
    return (
        <Col sm="6" md="4">
            <Card style={{ marginTop: '40px', marginBottom: '20px' }}>
                <CardHeader>{file[0]}</CardHeader>
                <CardBody>
                    {
                        file[1] === '00000000-0000-0000-0000-000000000000'
                            ? <h4>Brak pliku</h4>
                            : <h4>Plik jest</h4>
                    }
                </CardBody>
                <CardFooter>
                    <Button>Pobierz</Button>
                    <Button>Wyślij</Button>
                </CardFooter>
            </Card>
        </Col>
    )
}