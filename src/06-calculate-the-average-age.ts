import { data } from './data'
import { User } from './data'

function calculateTheAverageAge(users: User[]): number {
	let sumOfAges = 0
	users.forEach(user => sumOfAges += user.idade)
	const averageAge = sumOfAges/users.length
	return averageAge
}
console.log(calculateTheAverageAge(data))
