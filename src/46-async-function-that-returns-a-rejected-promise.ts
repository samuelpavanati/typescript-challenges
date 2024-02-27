function rejectedPromise(): Promise<void> {
	return Promise.reject(new Error('Specific Error'))
}

rejectedPromise().catch(error => console.error(error.message))