export default class DateFormat {
    constructor(time) {
        this.time = time
    }

    convert() {
        let day, month, year
        day = this.time.slice(0, 2)
        month = this.time.slice(3, 5)
        year = this.time.slice(6, 10)
        this.day = day
        this.month = month
        this.day = year
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