import axios, { AxiosError, AxiosResponse } from 'axios';

async function requestWithErrorHandling(url: string): Promise<void> {
    try {
        const response: AxiosResponse = await axios.get(url);
        console.log('Response data:', response.data);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            if (axiosError.response) {
                console.error(`Request Error: ${axiosError.response.status} - ${axiosError.response.statusText}`);
                console.error('Response data:', axiosError.response.data);
            } else {
                console.error('Error details:', axiosError.toJSON());
            }
        } else {
            console.error(`Unexpected error: ${error}`);
        }
    }
}

// Exemplo de uso
requestWithErrorHandling('https://jsonplaceholder.typicode.com/posts/123');
