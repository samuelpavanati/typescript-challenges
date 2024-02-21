import { data } from './data'
import { User } from './data'

function incrementAge(users: User[]): User[] {
	for (const item of users) {
		item.idade += 1
	}
	return users
}
console.log(incrementAge(data))