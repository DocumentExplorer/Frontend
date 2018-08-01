import React from 'react'
import { Col, Card, CardTitle, CardBody, CardFooter, CardHeader, Button, Input } from 'mdbreact'
import _ from 'lodash'

export const FilesList = ({ files, requires, ...props }) => {
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

const File = ({ file, isRequired, download, toggle, toggleDelete, permissions, changeRequired }) => {
    let filetered = _.pickBy(permissions.permissions, (value, key) => {
        return key === file[0].slice(0, -2)
    })
    let key = Object.keys(filetered)[0]
    let mock = !isRequired
    return (
        <Col sm="6" md="4">
            <Card style={{ marginTop: '40px', marginBottom: '20px', minHeight: '300px' }}>
                <CardHeader className="header">
                    <h4>{file[0].slice(0, -2)}</h4>
                    {
                        filetered[key] === localStorage.getItem('role') || localStorage.getItem('role') === 'admin'
                            ?
                            <label className="switch">
                                <input type="checkbox" checked={isRequired[1]} onChange={(e) => changeRequired(file[0].slice(0, -2), isRequired)} />
                                <span className="slider"></span>
                            </label>
                            : ''
                    }


                </CardHeader>
                <CardBody>
                    {
                        file[1] === '00000000-0000-0000-0000-000000000000'
                            ? 'Brak pliku'
                            : 'Plik został już wysłany'
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
                        filetered[key] === localStorage.getItem('role') || localStorage.getItem('role') === 'admin'
                            ? file[1] === '00000000-0000-0000-0000-000000000000'
                                ? <Button color="primary" onClick={(e) => toggle(file[0], isRequired[1])}>Wyślij</Button>
                                : <Button color="danger" onClick={(e) => toggleDelete(file[1])}>Usuń</Button>
                            : ''
                    }
                </CardFooter>
            </Card>
        </Col>
    )
}