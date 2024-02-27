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

async function readFileWithErrorHandler(path: string): Promise<void> {
	try {
		const data = await readFile(path)
		console.log(data)
	} catch (error) {
		console.error(`Error while reading the file: ${error}`)
	}
}

console.log(readFileWithErrorHandler('src/fileToPromise.json'))