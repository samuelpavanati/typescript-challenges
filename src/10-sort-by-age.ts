import { data } from './data'
import { User } from './data'

function sortByAge(users: User[]) {
	return users.sort((a, b) => a.idade - b.idade)
}
console.log(sortByAge(data))
