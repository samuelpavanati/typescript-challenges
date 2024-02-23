interface IVehicle {
  brand: string;
  model: string;
  displayDetails(): string;
}

class Car implements IVehicle {
	brand: string
	model: string

	constructor(brand: string, model: string) {
		this.brand = brand
		this.model = model
	}

	displayDetails() {
		return `Car: ${this.brand} ${this.model}`
	}
}

class Motorcycle implements IVehicle {
	brand: string
	model: string

	constructor(brand: string, model: string) {
		this.brand = brand
		this.model = model
	}

	displayDetails() {
		return `Motorcycle: ${this.brand} ${this.model}`
	}
}

const car = new Car('Honda', 'Civic')
const motorcycle = new Motorcycle('Yamaha', 'Tornado')

console.log(car.displayDetails())
console.log(motorcycle.displayDetails())