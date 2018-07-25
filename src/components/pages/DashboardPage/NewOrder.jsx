import React from 'react'
import { Button, Col, Input } from 'mdbreact'
import { MyModal } from '../../Modal/MyModal';
import { connect } from 'react-redux'
import { postOrder } from '../../../redux/actions'
import _ from 'lodash'

class NewOrder extends React.Component {

    constructor() {
        super()
        this.state = {
            newOrderModal: false
        }
        this.toggleNewOrderModal = this.toggleNewOrderModal.bind(this)
        this.addNewOrder = this.addNewOrder.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    toggleNewOrderModal() {
        this.setState({
            newOrderModal: !this.state.newOrderModal
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    addNewOrder() {
        const order = _.pick(this.state, ['number', 'clientCountry', 'clientIdentificationNumber', 'brokerCountry', 'brokerIdentificationNumber'])
        this.props.postOrder(order)
    }

    render() {
        return (
            <React.Fragment>
                <Col md="3" sm="8">
                    <Button outline onClick={this.toggleNewOrderModal}>Dodaj zlecenie</Button>
                </Col>
                <MyModal
                    test={this.state.newOrderModal}
                    toggle={this.toggleNewOrderModal}
                    sumbit={this.addNewOrder}
                    component={addNewOrder}
                    sumbitText="Dodaj"
                    title="Dodaj zlecenie"
                    handleChange={this.handleChange}
                    size="lg"
                />
            </React.Fragment>
        )
    }
}

const addNewOrder = ({ handleChange }) => (
    <React.Fragment>
        <Input name="number" label="Numer zlecenia" icon="file-o" type="text" onChange={(e) => handleChange(e)} />
        <Input name="clientCountry" label="Kraj klienta" icon="flag" type="text" onChange={(e) => handleChange(e)} />
        <Input name="clientIdentificationNumber" label="NIP klienta" icon="address-card" type="text" onChange={(e) => handleChange(e)} />
        <Input name="brokerCountry" label="Kraj pośrednika" icon="flag-o" type="text" onChange={(e) => handleChange(e)} />
        <Input name="brokerIdentificationNumber" label="NIP pośrednika" icon="address-card-o" type="text" onChange={(e) => handleChange(e)} />
    </React.Fragment>
)

export default connect(undefined, { postOrder })(NewOrder)