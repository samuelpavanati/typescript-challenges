const numbers = [-5, 3, 0, 2, -1, 4, -2]

function sumAllPositiveNumbers(values: number[]): number {
	let sumPositiveNumber = 0
	values.forEach(num => {
		if (num > 0) {
			sumPositiveNumber += num
		}
	})
	return sumPositiveNumber
}
console.log(sumAllPositiveNumbers(numbers))