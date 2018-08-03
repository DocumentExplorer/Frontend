import React, { Fragment } from 'react'
import { Button } from 'mdbreact'
import { MyModal } from '../../Modal/MyModal';
import { addNewOrder } from '../DashboardPage/NewOrder'


const DeleteOrderConfirmation = () => (
    <p>Czy na pewno chcesz usunąć to zleceni?</p>
)

export const Footer = ({ handleDelete, handleModify, toggleModalModify, toggleModalRemove, modifyResult, ...props }) => {
    return (
        <Fragment>
            {
                localStorage.getItem('role') === 'admin' || localStorage.getItem('username') === props.order.owner1Name
                    ? <Button color="danger" onClick={(e) => toggleModalRemove()}>Usuń</Button>
                    : ''
            }

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
        </Fragment>
    )
}