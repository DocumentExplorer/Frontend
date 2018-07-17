import React from 'react'
import { Card, CardBody, CardImage, CardText, CardTitle, Button } from 'mdbreact'

class FindedOrders extends React.Component {
    render() {
        console.log(this.props)
        
        return (
            <Card>
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button href="#">Button</Button>
                </CardBody>
            </Card>
        )
    }
}

export default FindedOrders