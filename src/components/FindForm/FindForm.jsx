import React from 'react'
import { Card, CardBody, Input, Button } from 'mdbreact'

class FindForm extends React.Component {
    render() {
        return (
            <Card>
                <CardBody>
                    <form>
                        <p className="h3 text-center py-3">Szukanie zleceń</p>
                        <div className="grey-text">
                            <Input label="Numer faktury" icon="user" group type="text" validate error="wrong" success="right" />
                            <Input label="NIP klienta" icon="envelope" group type="text" validate error="wrong" success="right" />
                            <Input label="NIP pośrednika" icon="exclamation-triangle" group type="text" validate error="wrong" success="right" />
                            <Input label="Kraj klienta" icon="lock" group type="text" validate />
                            <Input label="Kraj pośrednika" icon="lock" group type="text" validate />
                        </div>
                        <div className="text-center py-4 mt-3">
                            <Button color="cyan" type="submit">Register</Button>
                        </div>
                    </form>
                </CardBody>
            </Card>
        )
    }
}

export default FindForm