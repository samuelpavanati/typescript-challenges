import { data } from './data'
import { User } from './data'

function filterProfessions(users: User[]): User[] {
	return users.filter(user => user.profissao === 'Desenvolvedora')
}
console.log(filterProfessions(data))