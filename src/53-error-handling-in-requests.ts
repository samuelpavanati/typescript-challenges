import axios from 'axios'

async function requestWithErrorHandling(url: string): Promise<void> {
	try {
		await axios.get(url)
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.error(`Request Error: ${error.response?.status} - ${error.response?.statusText}`)
		} else {
			console.error(`Unexpected error: ${error}`)
		}
	}
}

requestWithErrorHandling('https://jsonplaceholder.typicode.com/posts/123')