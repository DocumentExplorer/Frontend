import React from 'react'
import OrderByYear from '../helpers/OrdersByYears'
import _ from 'lodash'
import DateFormat from '../helpers/DateFormat'

const List = (props) => {
    const { data } = props
    const years = []
    for (let i = 2005; i <= new Date().getFullYear; i++) {
        years.push(new OrderByYear(i, _.filter(data, (item) => {
            let convertedDate = new DateFormat(item.date).convert()
            item.date = convertedDate
            if(convertedDate.year == i) return item
        })))
    }
    return (
        <div>próba</div>
    )
}

export default List