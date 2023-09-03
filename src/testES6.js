class Car {
    constructor(name) {
      this.brand = name;
    }

    present() {
        return 'I have a' + this.brand;
    }
}

class ModelCar extends Car {
    constructor(name, model) {
        super(name);
        this.model = model;
    }

    show() {
        return this.present() + ', it is a' + this.model;
    }
}
  
const mycar = new Car("Ford");
mycar.present();
  
  