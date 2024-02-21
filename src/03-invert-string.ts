const texto = 'Desenvolvedor'

function invertString(str: string): string {
	return str.split('').reverse().join('')
}

console.log(invertString(texto))
