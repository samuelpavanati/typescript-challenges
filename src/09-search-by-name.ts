import { data } from './data'
import { User } from './data'

function searchByName1(users: User[], name: string): User {
	const index = users.findIndex(user => user.nome === name)
	return users[index]
}

function searchByName2(users: User[], name: string): User[] {
	return users.filter(user => user.nome === name)
}

console.log(searchByName1(data, 'Eduardo'))
console.log(searchByName2(data, 'Alice'))


