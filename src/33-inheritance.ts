import { Person } from './classes/person-class'

class Student extends Person {
	course: string

	constructor(name: string, age: number, course: string) {
		super(name, age)
		this.course = course
	}

	introduceYourself(): string {
		return `Hello, my name is ${this.name} and I am a student of the ${this.course} course.`
	}
}

const student = new Student('Diego', 23, 'Software Engineering')

console.log(student.introduceYourself())