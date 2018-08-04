import React, { Fragment } from 'react'
import OrderByYear from '../helpers/OrdersByYears'
import _ from 'lodash'
import { ListGroup, ListGroupItem } from 'mdbreact'
import { Fa } from 'mdbreact'

export const List = ({ handleClick, data }) => {
    let years = []
    const maxLenth = new Date().getFullYear() - 2015
    if (years.length <= maxLenth) {
        for (let i = 2015; i <= new Date().getFullYear(); i++) {
            years.push(new OrderByYear(i, _.filter(data, (item) => {
                if (item.date.year == i) {
                    return item
                }
            })))
        }
    }
    let reversed = _.reverse(years)
    return (
        <Fragment>

            <ListGroup className="wrapper">
                <h2>Lata</h2>
                {reversed.map((item, i) => (
                    <ListGroupItem key={i} onClick={() => handleClick(item.year)}>
                        <Fa icon="folder" />
                        {item.year}
                    </ListGroupItem>
                ))}
            </ListGroup>
        </Fragment>
    )
}
