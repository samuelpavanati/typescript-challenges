interface Worker {
  worker(): string;
}

class Developer implements Worker {
	worker(): string {
		return 'Developing software'
	}
}

class Designer implements Worker {
	worker(): string {
		return 'Designing user interfaces'
	}
}

const dev = new Developer()
console.log(dev.worker())

const designer = new Designer()
console.log(designer.worker())
