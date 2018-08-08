import StoreService from './StoreService.js'

let storeService = new StoreService;

function drawTransSubTotal(subtotal) {
  document.getElementById('subtotal').innerText = subtotal;
  drawTransTax(subtotal)
}
function drawTransTax(tax) {
  let newTax = tax * 0.06
  let total = tax + newTax
  document.getElementById('tax').innerText = newTax;
  drawTransTotal(newTax)
  drawTransTotal(total)
}
function drawTransTotal(total) {

  document.getElementById('total').innerText = total;
}

function draw() {
  let product1 = storeService.iceman
  let product2 = storeService.beast
  let product3 = storeService.razorback
  let subTotal = storeService.addToCart.newtotal
  let template = `
  <div class="row">
  <div class="col-sm-4">
    <div>
      <img src="${product1.img}" alt="target image" onclick='app.controllers.storeController.addToCart("a1")' />
    </div>
    <div>
      <h2>${product1.name}</h2>
    </div>
    <div>
      <h2>$${product1.price}</h2>
    </div>
  </div>
  <div class="col-sm-4">
    <div>
      <img src="${product2.img}" alt="target image" onclick='app.controllers.storeController.addToCart("a2")' />
    </div>
    <h2>${product2.name}</h2>
    <h2>$${product2.price}</h2>
  </div>
  <div class="col-sm-4">
    <div>
      <img src="${product3.img}" alt="target image" onclick='app.controllers.storeController.addToCart("a3")' />
    </div>
    <h2>${product3.name}</h2>
    <h2>$${product3.price}</h2>
  </div>
  </div>
`
  document.getElementById("store").innerHTML = template;
}


class StoreController {
  constructor() {
    draw()
  }
  addToCart(id) {
    let newtotal = storeService.addToCart(id);
    drawTransSubTotal(newtotal)
  }
}

console.log('Hello from StoreController.js!')
export default StoreController;