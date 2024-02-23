class Person {
	readonly id: number
	name: string
	age: number
  
	constructor(id: number, name: string, age: number) {
		this.id = id
		this.name = name
		this.age = age
	}

	getId(): number {
		return this.id
	}

	getNome(): string {
		return this.name
	}

	setNome(name: string): void {
		this.name = name
	}

	getIdade(): number {
		return this.age
	}

	setAge(age: number): void {
		this.age = age
	}

	introduceYourself(): string {
		return `Hello, my id is ${this.id} and my name is ${this.name} and I am ${this.age} years old.`
	}
}

const person = new Person(241001, 'Paulo', 37)
console.log(person.introduceYourself())
