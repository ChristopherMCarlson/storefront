import StoreController from './app/components/store/StoreController.js'


class App {
  constructor() {
    this.controllers = {
      storeController: new StoreController(),
    }
  }
}

window.app = new App;

console.log('Hello from main.js!')