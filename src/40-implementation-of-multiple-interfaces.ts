interface Worker {
  worker(): string
}

interface IVehicle {
  brand: string
  model: string
  displayDetails(): string
}

class ProjectManager implements Worker, IVehicle {
	brand: string
	model: string

	constructor(vehicle: { brand: string; model: string }) {
		this.brand = vehicle.brand
		this.model = vehicle.model
	}

	worker() {
		return 'Project Manager'
	}

	displayDetails() {
		return `Car: ${this.brand} ${this.model}`
	}
}

const projectManager = new ProjectManager( {'brand': 'Toyota', 'model':'Corola'} )

console.log(projectManager.worker())
console.log(projectManager.displayDetails())