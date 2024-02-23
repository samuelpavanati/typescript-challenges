abstract class Employee {
	name: string
	age: number
	baseSalary: number

	constructor(name: string, age: number, baseSalary: number) {
		this.name = name
		this.age = age
		this.baseSalary = baseSalary
	}
  abstract calculateSalary(): number;
}

class Manager extends Employee {
	calculateSalary() {
		return this.baseSalary * 2
	}
}

class Worker extends Employee {
	calculateSalary() {
		return this.baseSalary + 500
	}
}

const manager = new Manager('Emmanuel', 35, 7500)
const worker = new Worker('Elias', 19, 1500)

console.log('Manager Salary $', manager.calculateSalary().toString())
console.log('Worker Salary $', worker.calculateSalary().toString())