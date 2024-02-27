// const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'First'))

const promise1 = new Promise((resolve) => setTimeout(resolve, 500, 'First'))
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'Second'))

Promise.race([promise1, promise2]).then((value) => {
	console.log(value) // The second one is faster
})

