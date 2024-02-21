import { data } from './data'
import { User } from './data'

function getPeopleOverTwentyFive(users: User[]): User[] {
	return users.filter(user => user.idade > 25)
}
console.log(getPeopleOverTwentyFive(data))