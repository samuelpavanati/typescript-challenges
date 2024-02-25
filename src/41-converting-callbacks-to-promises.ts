import fs from 'fs'

function readFileWithCallback(path: string, callback: (error: NodeJS.ErrnoException | null, data?: string) => void): void {
	fs.readFile(path, { encoding: 'utf8' }, callback)
}

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

async function testPromise() {
	console.log(readFileWithCallback('src/fileForPromise.json', (error, data) => {
		if (error) {
			console.error('Error reading file:', error)
		} else {
			console.log('File content:', data)
		}
	}))

	console.log(await readFile('src/fileForPromise.json'))
}

testPromise()