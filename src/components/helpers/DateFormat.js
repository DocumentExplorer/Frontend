export default class DateFormat {
    constructor(date) {
        this.date = date
    }

    convert() {
        let day, month, year
        day = this.date.slice(0, 2)
        month = this.date.slice(3, 5)
        year = this.date.slice(6, 10)
        this.day = day
        this.month = month
        this.year = year
        return {
            day,
            month,
            year
        }
    }
}

export function convertToNumbers(day, month, year) {
    
    try {
        day = parseInt(day)
        month = parseInt(month)
        year = parseInt(year)
    } catch (err) {
        console.log(err)
    }
    return {
        day,
        month,
        year
    }
}