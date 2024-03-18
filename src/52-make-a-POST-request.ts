import axios from 'axios'

async function makePOSTRequest(url: string, data: object): Promise<void> {
	try {
		const answer = await axios.post(url, data)
		console.log(answer.data)
	} catch (error) {
		console.error(`Request Error: ${error}`)
	}
}

makePOSTRequest('https://jsonplaceholder.typicode.com/posts', {
	title: 'foo',
	body: 'bar',
	userId: 1
})