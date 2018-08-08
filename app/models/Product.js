let subtotal = 0

class Product {
  constructor(name, img, price, stock, id) {
    this.name = name
    this.img = img
    this.price = price
    this.stock = stock
    this.id = id
  }
  addToCart(product) {
    if (product.stock == 0) {
      subtotal += 0;
      product.img = '../../../assets/oos.png';
    } else {
      product.stock--;
      subtotal += product.price;
    }
    return subtotal
  }
}


console.log('Hello from Product.js!')
export default Product;