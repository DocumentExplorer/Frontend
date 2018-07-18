import React from 'react'
import _ from 'lodash'
import { convertToNumbers } from '../../helpers/DateFormat';


export default ({ data }) => {
    const month = []
    for (let i = 1; i <= 12; i++) {
        month.push({
            month: i,
            ordersByMonth: []
        })
    }
    _.forEach(data, (value, index) => {
        let { day, month, year } = value.time
        const converted = convertToNumbers(day,month,year)
        month.ordersByMonth.push()
    })
}


