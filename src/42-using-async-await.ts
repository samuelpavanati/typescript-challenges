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

async function readFileAsync(path: string): Promise<string> {
	try {
		const data = await readFile(path)
		console.log(data)
		return data
	} catch (error) {
		throw new Error(`Error while reading the file: ${error}`)
	}
}

console.log(readFileAsync('src/fileToPromise.json'))
