enum UserType {
  Admin = 1,
  Editor = 2,
  Visitor = 3,
}
const user = UserType
console.log(user)

const enumValues: any = {}
for (const member in UserType) {
	if (isNaN(Number(member))) {
		enumValues[member] = UserType[member]
	}
}
console.log(enumValues)