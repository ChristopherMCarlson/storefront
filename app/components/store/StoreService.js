import Product from '../../models/Product.js'

import Store from '../../models/Store.js'

let product = new Product
let store = new Store

let iceman = new Product('Ibanez Iceman', '../../../assets/iceman.png', 500, 5, 'a1');
let beast = new Product('BC Rich Beast', '../../../assets/beast.png', 450, 10, 'a2');
let razorback = new Product('Dean Razorback', '../../../assets/razorback.png', 300, 13, 'a3');
let items = new Array(iceman, beast, razorback)

class StoreService {
  constructor() {
    this.total = 0
  }

  get items() {
    let itemsCopy = []

    items.forEach(item => {
      itemsCopy.push({
        name: item.name,
        img: item.img,
        price: item.price,
        stock: item.stock,
        id: item.id
      })
    })
    return itemsCopy
  }

  addToCart(id) {
    let newItem = items.find(itemid => itemid.id == id);
    let newTotal = product.addToCart(newItem);
    return newTotal
  }

  checkout(transTotal) {
    store.checkout(transTotal)
  }


}

console.log('Hello from StoreService.js!')
export default StoreService