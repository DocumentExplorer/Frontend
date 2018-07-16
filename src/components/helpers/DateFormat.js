export default class DateFormat {
    constructor(time) {
        this.time = time
    }

    convert() {
        let day, month, year
        day = this.time.slice(0, 2)
        month =  this.time.slice(3, 5)
        year = this.time.slice(6, 10)
        return {
            day,
            month,
            year
        }

    }

}