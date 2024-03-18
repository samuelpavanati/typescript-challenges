import axios from 'axios'

async function makeGETRequest(url: string) : Promise<void> {
	try {
		const answer = await axios.get(url)
		console.log(answer.data)
	} catch (error) {
		console.error(`Request Error: ${error}`)
	}
}

makeGETRequest('https://jsonplaceholder.typicode.com/posts/1')
