const JSONType = {
	'port': 3000,
	'mode': 'produção',
	'services': [
		'auth',
		'dados'
	]
}

interface AppConfig {
  port: number;
  mode: string;
  services: string[];
}
  
const newAppJSONToInterface: AppConfig = JSONType

const { port, mode, services } = JSONType

console.log(port, mode, services)
console.log(newAppJSONToInterface)
