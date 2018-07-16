export default class OrderByYear {
    constructor(year, matchOrders = []) {
        this.year = year
        this.matchOrders = matchOrders
    }
    pushOrder(order) {
        this.matchOrders.push(order)
    }
}