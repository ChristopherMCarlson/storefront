import Product from '../../models/Product.js'

let product = new Product

let iceman = new Product('Ibanez Iceman', '../../../assets/iceman.png', 500, 5, 'a1');
let beast = new Product('BC Rich Beast', '../../../assets/beast.png', 450, 10, 'a2');
let razorback = new Product('Dean Razorback', '../../../assets/razorback.png', 300, 13, 'a3');
let items = new Array(iceman, beast, razorback)

class StoreService {
  constructor() {
    this.total = 0
  }

  get iceman() {
    return {
      name: iceman.name,
      img: iceman.img,
      price: iceman.price,
      stock: iceman.stock,
      id: iceman.id
    }
  }

  get beast() {
    return {
      name: beast.name,
      img: beast.img,
      price: beast.price,
      stock: beast.stock,
      id: beast.id
    }
  }

  get razorback() {
    return {
      name: razorback.name,
      img: razorback.img,
      price: razorback.price,
      stock: razorback.stock,
      id: razorback.id
    }
  }

  addToCart(id) {
    let newItem = items.find(itemid => itemid.id == id);
    let newTotal = product.addToCart(newItem);
    return newTotal
  }


}

console.log('Hello from StoreService.js!')
export default StoreService