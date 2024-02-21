import { data } from './data'
import { User } from './data'

function longestName(users: User[]): string {
	let name = 'a'
	users.forEach(user => {
		if (user.nome.length > name.length) {
			name = user.nome
		}
	})
	return name
}
console.log(longestName(data))
