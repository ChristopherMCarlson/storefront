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
  let items = storeService.items
  let template = `
  `
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.stock == 0) {
      template += `
      <div class="col-sm-4">
      <div>
        <img src="../../../assets/oos.png" alt="target image" onclick='app.controllers.storeController.addToCart("${item.id}")' />
      </div>
      <div>
        <h2>${item.name}</h2>
      </div>
      <div>
        <h2>$${item.price}</h2>
      </div>
    </div>
      `
    } else {
      template += `
      <div class="col-sm-4">
      <div>
        <img src="${item.img}" alt="target image" onclick='app.controllers.storeController.addToCart("${item.id}")' />
      </div>
      <div>
        <h2>${item.name}</h2>
      </div>
      <div>
        <h2>$${item.price}</h2>
      </div>
    </div>
      `
    }
  }
  document.getElementById("store").innerHTML = template;
}


class StoreController {
  constructor() {
    draw()
  }
  addToCart(id) {
    let newtotal = storeService.addToCart(id);
    drawTransSubTotal(newtotal)
    draw()
  }

  checkout() {
    storeService.checkout()
    drawTransTotal(0)
    draw()
  }
}

console.log('Hello from StoreController.js!')
export default StoreController;