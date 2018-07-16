export default class DateFormat {
    constructor(date) {
        this.date = date
    }

    convert() {
        this.day = this.date.slice(0,1)
        this.month = this.date.slice(3,4)
        this.year = this.date.slice(6,10)
    }

}