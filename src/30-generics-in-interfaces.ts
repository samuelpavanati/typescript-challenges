import { User } from './22-interface-for-user'

interface APIResponse<T> {
  status: number
  data: T
}

interface UserData {
  users: User[]
}

const answer: APIResponse<UserData> = {
	status: 200,
	data: {
		users: [{
			id: 1,
			name: 'Bob',
			email: 'bob@example.com',
			active: true
		}]
	}
}

const user: User[] = answer.data.users

const { id, name, email, active } = answer.data.users[0]

console.log(id, name, email, active)
console.log(answer.status, user)