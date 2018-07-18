import React from 'react'
import _ from 'lodash'
import { convertToNumbers } from '../../helpers/DateFormat';


export default ({ data }) => {
    const months = []
    for (let i = 1; i <= 12; i++) {
        months.push({
            month: i,
            ordersByMonth: []
        })
    }
    _.forEach(data, (value) => {
        let { day, month, year } = value.time
        const converted = convertToNumbers(day, month, year)
        value.time = converted
        _.forEach(months, (month) => {
            if (month.month === value.time.month) {
                month.ordersByMonth.push(value)
            }
        })
    })
    return (
        <ul>
            {
                months.map((value, i) => (
                    <li key={i}>
                        {value.month}
                        {
                            value.ordersByMonth.map((item, index) => (
                                <p key={index}>
                                    {item.invoiceNumber}
                                </p>
                            ))
                        }
                    </li>
                ))
            }
        </ul>
    )
}


