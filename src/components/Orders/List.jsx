import React, { Fragment } from 'react'
import OrderByYear from '../helpers/OrdersByYears'
import _ from 'lodash'
import DateFormat from '../helpers/DateFormat'
import { ListGroup, ListGroupItem } from 'mdbreact'
import { withRouter } from 'react-router-dom'
import { Fa } from 'mdbreact'

class List extends React.Component {

    constructor() {
        super()
        this.state = {
            years: []
        }
    }

    handleClick(year) {
        console.log(year)
        this.props.history.push(`/orders/${year}`)
    }

    render() {
        const { data } = this.props
        for (let i = 2005; i <= new Date().getFullYear(); i++) {
            this.state.years.push(new OrderByYear(i, _.filter(data, (item) => {
                let converted = new DateFormat(item.time).convert()
                item.converted = converted
                if (item.converted.year == i) {
                    return item
                }
            })))
        }
        return (
            <Fragment>

                <ListGroup className="wrapper">
                    <h2>Lata</h2>
                    {this.state.years.map((item, i) => (
                        <ListGroupItem key={i} onClick={this.handleClick.bind(this, item.year)}>
                            <Fa icon="folder"/>
                            {item.year}
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Fragment>
        )
    }
}

export default withRouter(List)