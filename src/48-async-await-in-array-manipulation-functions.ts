async function processArray(array: number[]): Promise<number[]> {
	return Promise.all(array.map(async (value) => {

		await new Promise(resolve => setTimeout(resolve, 100)) // Simulate waiting
		
		return Promise.resolve(value * 2)
	}))
}

const inputArray: number[] = [2, 4, 6, 8, 10];

(async () => {
	const result = await processArray(inputArray)
	console.log(result)
})()
