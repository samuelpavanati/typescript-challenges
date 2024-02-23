class Person {
	name: string
	age: number
  
	constructor(name: string, age: number) {
		this.name = name
		this.age = age
	}
  
	introduceYourself(): string {
		return `Hello, my name is ${this.name} and I am ${this.age} years old.`
	}
}

const person = new Person('Douglas', 25)

console.log(person.introduceYourself())