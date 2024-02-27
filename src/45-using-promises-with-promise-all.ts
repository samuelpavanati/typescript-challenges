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

async function readMultipleFiles(paths: string[]): Promise<void> {
	try {
		const promises = paths.map(path => readFile(path))
		const results = await Promise.all(promises)

		results.forEach((content, index) => {
			console.log(`File content ${index + 1}: ${content}`)
		})
    
	} catch (error) {

		console.error(`Error while reading the file: ${error}`)
	}
}

const files = [
	'src/fileToPromise.json',
	'src/fileToPromise2.json'
]


console.log(readMultipleFiles(files))