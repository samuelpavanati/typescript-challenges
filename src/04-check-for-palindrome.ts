const palavra = 'radar'

function checkForPalindrome(str: string): boolean {
	const inverseStr = str.split('').reverse().join('')
	if (str === inverseStr) {
		return true
	}
	return false
}
console.log(checkForPalindrome(palavra))