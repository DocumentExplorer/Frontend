import React from 'react'
import './order.css'
import ApiHOC from '../../helpers/ApiHOC'
import { connect } from 'react-redux'
import { getOrderById, deleteOrder } from '../../../redux/actions'
import { Container, Button } from 'mdbreact'
import { OrderInformation } from './OrderInformation'
import { MyModal } from '../../Modal/MyModal';


class OrderPage extends React.Component {

    constructor() {
        super()
        this.state = {
            modalRemove: false,
            modalModify: false
        }
        this.toggleModalModify = this.toggleModalModify.bind(this)
        this.toggleModalRemove = this.toggleModalRemove.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleModify = this.handleModify.bind(this)
    }


    componentDidMount() {
        const { match: { params: { id } } } = this.props
        this.props.getOrderById(id)
    }

    toggleModalRemove() {
        this.setState({
            modalRemove: !this.state.modalRemove
        })
    }

    toggleModalModify() {
        this.setState({
            modalRemove: !this.state.modalModify
        })
    }

    handleDelete() {
        const { match: { params: { id } } } = this.props
        this.props.deleteOrder(id, () => {
            this.props.history.push('/')
        })
    }

    handleModify(order) {

    }

    render() {
        return (
            <Container>
                <ApiHOC
                    component={OrderInformation}
                    test={this.props.orders.getOrderRequest}
                    order={this.props.orders.order}
                    style={{ width: '100%', marginTop: '50px' }}
                    footer={Footer}
                    modalModify={this.state.modalModify}
                    modalRemove={this.state.modalRemove}
                    toggleModalRemove={this.toggleModalRemove}
                    toggleModalModify={this.toggleModalModify}
                    handleDelete={this.handleDelete}
                />
            </Container>
        )
    }
}

function mapStateToProps({ orders }) {
    return {
        orders
    }
}

const DeleteOrderConfirmation = () => (
    <p>Czy na pewno chcesz usunąć to zleceni?</p>
)

const ModifyModal = () => (
    <p>asd</p>
)

const Footer = ({ handleDelete, toggleModalModify, toggleModalRemove, handleModify, ...props }) => {
    console.log(props)
    return (
        <React.Fragment>
            <Button color="danger" onClick={(e) => toggleModalRemove()}>Usuń</Button>
            <Button color="primary" onClick={(e) => toggleModalModify()}>Modyfikuj</Button>
            <MyModal
                test={props.modalRemove}
                component={DeleteOrderConfirmation}
                sumbit={handleDelete}
                title="Usuwanie"
                sumbitText="Usuń"
                toggle={toggleModalRemove}
            />
            <MyModal
                test={props.modalModify}
                component={ModifyModal}
                sumbit={handleModify}
                toggle={toggleModalModify}
                title="Modyfikacja zlecenia"
                sumbitText="Modyfikuj"
            />
        </React.Fragment>
    )
}


const component = connect(mapStateToProps, { getOrderById, deleteOrder })(OrderPage)
export { component as OrderPage }