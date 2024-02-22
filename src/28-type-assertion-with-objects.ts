import { User } from './22-interface-for-user'

const somaObject: any = {
	id: 1,
	name: 'Alice',
	email: 'alice@example.com',
	active: true
}
const user: User = <User>somaObject
console.log(user)

const anotherUser: User = {
	id: 1,
	name: 'Alice',
	email: 'alice@example.com',
	active: true
}
console.log(anotherUser)