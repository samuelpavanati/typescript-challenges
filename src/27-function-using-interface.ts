import { personInfo as User } from './21-types-for-an-array-of-objects'

const user: User = {
	name: 'John Doe',
	age: 29,
	profession: 'Developer'
}

function createUser(name: string, age: number): User {
	const user: User = {
		name,
		age,
		profession: 'nothing'
	}
	console.log(name, age)

	return user
}

console.log(createUser(user.name, user.age))
  