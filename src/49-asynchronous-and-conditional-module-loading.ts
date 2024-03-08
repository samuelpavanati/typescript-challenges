// async function loadModuleDynamically(moduleName: string) {
// 	if (moduleName === 'fs') {
// 		const fs = await import('fs')
// 		console.log('FS module dynamically loaded.')
// 	} else {
// 		console.log('Module not specified.')
// 	}
// }

// console.log(loadModuleDynamically('fs').then())

function loadModuleDynamically(moduleName: string) {
	return new Promise((resolve, reject) => {
		if (moduleName === 'fs') {
			import('fs').then(fs => {
				console.log('FS module dynamically loaded.')
				resolve(fs)
			}).catch(error => {
				reject(error)
			})
		} else {
			reject('Module not specified.')
		}
	})
}

/* CALLING THE FUNCTION 1 */
// loadModuleDynamically('fs')
// 	.then(() => {
// 		console.log('Module loaded successfully.')
// 	})
// 	.catch(error => {
// 		console.error('Error:', error)
// 	})

/* CALLING THE FUNCTION 2 */
(async () => {
	await loadModuleDynamically('fs')
	console.log('Module loaded successfully.')
})()