import React from 'react'
import { Col, Card, CardTitle, CardBody, CardFooter, CardHeader, Button, Input } from 'mdbreact'
import _ from 'lodash'

export const FilesList = ({ files, requires, ...props }) => {
    console.log(files)
    let array = []
    for (let i = 0; i < 9; i++) {
        array.push(
            <File
                key={i}
                file={files[i]}
                isRequired={requires[i]}
                {...props}
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

const File = ({ file, isRequired, download, toggle, toggleDelete }) => {
    return (
        <Col sm="6" md="4">
            <Card style={{ marginTop: '40px', marginBottom: '20px' }}>
                <CardHeader>
                    <h4>{file[0].slice(0, -2)}</h4>
                </CardHeader>
                <CardBody>
                    {
                        file[1] === '00000000-0000-0000-0000-000000000000'
                            ? 'Brak pliku'
                            : 'Plik jest'
                    }
                    <p>
                        {
                            isRequired[1] == true
                                ? 'Plik jest wymagany'
                                : 'Plik nie jest wymagany'
                        }
                    </p>
                </CardBody>
                <CardFooter>
                    {
                        file[1] === '00000000-0000-0000-0000-000000000000'
                            ? ''
                            : <Button onClick={(e) => download(file[1])}>Pobierz</Button>
                    }
                    {
                        file[1] === '00000000-0000-0000-0000-000000000000'
                            ? <Button color="primary" onClick={(e) => toggle(file[0], isRequired[1])}>Wyślij</Button>
                            : <Button color="danger" onClick={(e) => toggleDelete(file[1])}>Usuń</Button>
                    }
                </CardFooter>
            </Card>
        </Col>
    )
}