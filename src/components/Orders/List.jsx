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
        const maxLenth = new Date().getFullYear() - 2015
        if (this.state.years.length <= maxLenth) {
            for (let i = 2015; i <= new Date().getFullYear(); i++) {
                this.state.years.push(new OrderByYear(i, _.filter(data, (item) => {
                    console.log(item)
                    if (item.date.year == i) {
                        return item
                    }
                })))
            }
        }

        return (
            <Fragment>

                <ListGroup className="wrapper">
                    <h2>Lata</h2>
                    {this.state.years.map((item, i) => (
                        <ListGroupItem key={i} onClick={this.handleClick.bind(this, item.year)}>
                            <Fa icon="folder" />
                            {item.year}
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Fragment>
        )
    }
}

export default withRouter(List)