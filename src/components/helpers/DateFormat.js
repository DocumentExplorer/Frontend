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
    if (month.charAt(0) == 0) {
        month = month.slice(1)
    }
    if (day.charAt(0) == 0) {
        day = day.slice(1)
    }
    try {
        day = day.toNumber()
        month = month.toNumber()
        year = year.toNumber()
    } catch (err) {
        console.log(err)
    }
    return {
        day,
        month,
        year
    }
}