function returnAnArray<T>(arr: T[]): T[] {
	return arr
}

// Example of usage
const numArray = returnAnArray([1, 2, 3])
const strArray = returnAnArray(['a', 'b', 'c'])

console.log(numArray)
console.log(strArray)