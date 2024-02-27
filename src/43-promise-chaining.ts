import fs from 'fs'

function readFile(path: string): Promise<string> {
	return new Promise((resolve, reject) => {
		fs.readFile(path, { encoding: 'utf8' }, (error, data) => {
			if (error) {
				reject(error)
			} else {
				resolve(data)
			}
		})
	})
}

readFile('src/fileToPromise.json')
	.then((data) => {
		console.log(`First file read: ${data}`)
		return readFile('src/fileToPromise2.json')
	})
	.then((data) => {
		console.log(`Second file read: ${data}`)
	})
	.catch((error) => {
		console.error(`Error while reading the file: ${error}`)
	})

console.log(readFile('src/fileToPromise.json'))