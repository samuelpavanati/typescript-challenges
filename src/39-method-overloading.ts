class Person {
	name: string
	age: number
	profession: string
    
	constructor(name: string, age: number, profession: string) {
		this.name = name
		this.age = age
		this.profession = profession
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
  
	introduceYourself(addProfession?: boolean): string {
		let presentation = `Hello, my name is ${this.name} and I am ${this.age} years old.`

		if (addProfession) {
			presentation += ` I am a ${this.profession}.`
		}

		return presentation
	}
}

function stringToBoolean(str: string): boolean {
	return str.toLowerCase() === 'true'
}

import * as readline from 'readline'

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

rl.question('Enter your input: ', (input: string) => {
	console.log(`You entered: ${input}`)

	const person = new Person('Leonel', 25, 'Soccer Player')
	console.log(person.introduceYourself(stringToBoolean(input)))

	rl.close()
})