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
                            <Input label="Numer faktury" icon="briefcase" group type="text" validate error="wrong" success="right" />
                            <Input label="NIP klienta" icon="address-card" group type="text" validate error="wrong" success="right" />
                            <Input label="NIP pośrednika" icon="address-card-o" group type="text" validate error="wrong" success="right" />
                            <Input label="Kraj klienta" icon="flag" group type="text" validate error="wrong" success="right" />
                            <Input label="Kraj pośrednika" icon="flag-o" group type="text" validate error="wrong" success="right" />
                        </div>
                        <div className="text-center py-4 mt-3">
                            <Button color="cyan" type="submit">Szukaj</Button>
                        </div>
                    </form>
                </CardBody>
            </Card>
        )
    }
}

export default FindForm