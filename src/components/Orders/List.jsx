import React from 'react'
import OrderByYear from '../helpers/OrdersByYears'
import _ from 'lodash'
import DateFormat from '../helpers/DateFormat'

const List = (props) => {
    const { data } = props
    const years = []
    for (let i = 2005; i <= new Date().getFullYear(); i++) {
        console.log(i)
        years.push(new OrderByYear(i, _.filter(data, (item) => {
            let converted = new DateFormat(item.time).convert()
            item.converted = converted
            if(item.converted.year == i) {
                console.log(item)
                return item
            }
        })))
    }
    console.log(years)
    return (
        <div>próba</div>
    )
}

export default List