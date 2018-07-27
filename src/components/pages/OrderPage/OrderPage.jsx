import React, { Fragment } from 'react'
import './order.css'
import ApiHOC from '../../helpers/ApiHOC'
import { connect } from 'react-redux'
import { getOrderById, deleteOrder, putOrder } from '../../../redux/actions'
import { Container, Button } from 'mdbreact'
import { OrderInformation } from './OrderInformation'
import { MyModal } from '../../Modal/MyModal';
import { addNewOrder } from '../DashboardPage/NewOrder'
import _ from 'lodash'


class OrderPage extends React.Component {

    constructor() {
        super()
        this.state = {
            modalRemove: false,
            modalModify: false,
            modifyResult: ''
        }
        this.toggleModalModify = this.toggleModalModify.bind(this)
        this.toggleModalRemove = this.toggleModalRemove.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleModify = this.handleModify.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }


    componentDidMount() {
        const { match: { params: { id } } } = this.props
        this.props.getOrderById(id)
        this.setState({
            id
        })
    }

    toggleModalRemove() {
        this.setState({
            modalRemove: !this.state.modalRemove
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            modifyResult: nextProps.orders.put_order_error
        })
    }

    toggleModalModify() {
        this.setState({
            modalModify: !this.state.modalModify
        })
    }

    handleDelete() {
        const { match: { params: { id } } } = this.props
        this.props.deleteOrder(id, () => {
            this.props.history.push('/')
        })
    }

    handleModify() {
        console.log('mody')
        let error
        let arrayOfProperties = ['id', 'number', 'clientCountry', 'clientIdentificationNumber', 'brokerCountry', 'brokerIdentificationNumber']
        const order = _.pick(this.state, arrayOfProperties)
        if (_.isEmpty(order) || _.size(order) !== arrayOfProperties.length) {
            error = true
            this.setState({
                modifyResult: 'Pola są puste'
            })
        } else {
            if (error !== true) {
                this.props.putOrder(order, () => {
                    setTimeout(() => {
                        this.toggleModalModify()
                    }, 2000)
                })
            }
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
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
                    handleChange={this.handleChange}
                    modifyResult={this.state.modifyResult}
                    handleModify={this.handleModify}
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

const Footer = ({ handleDelete, toggleModalModify, toggleModalRemove, handleModify, modifyResult, ...props }) => {
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
                component={addNewOrder}
                sumbit={handleModify}
                toggle={toggleModalModify}
                title="Modyfikacja zlecenia"
                sumbitText="Modyfikuj"
                handleChange={props.handleChange}
                success={false}
                message={modifyResult}
            />
        </React.Fragment>
    )
}


const component = connect(mapStateToProps, { getOrderById, deleteOrder, putOrder })(OrderPage)
export { component as OrderPage }