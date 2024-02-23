class Person {
	name: string
	age: number
  
	constructor(name: string, age: number) {
		this.name = name
		this.age = age
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
		return `Hello, my name is ${this.name} and I am ${this.age} years old.`
	}

	static createRandomPerson(): Person {
		return new Person(`Name${Math.random()}`, Math.floor(Math.random() * 100))
	}
}

const person2 = Person.createRandomPerson()
console.log(person2.introduceYourself())