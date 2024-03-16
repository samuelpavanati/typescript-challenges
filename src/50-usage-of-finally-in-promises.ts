import fs from 'node:fs'

function readFileAsync(path: string) {
	return new Promise((resolve, reject) => {
		fs.readFile(path, 'utf8', (err, data) => {
			if (err) {
				reject(err)
			} else {
				resolve(data)
			}
		})
	})
}

readFileAsync('src/pathToFile.txt')
	.then(data => {
		console.log(data)
	})
	.catch(error => {
		console.error(error)
	})
	.finally(() => {
		console.log('File reading operation completed.')
	})
