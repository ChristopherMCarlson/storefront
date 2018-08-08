class Store {
  constructor() {
    this.cash = 0
  }

  checkout(transTotal) {
    this.cash += transTotal;
    console.log('The store now has $' + this.cash)
  }
}

export default Store