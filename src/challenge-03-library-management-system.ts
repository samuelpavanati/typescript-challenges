import { randomUUID } from 'crypto'

interface Status {
  borrow(user: User): string
}

class Item {
	constructor(public title: string, public author: string) {}
}

class Book extends Item implements Status {
	private borrowed: boolean = false
	private borrower: User | null = null

	constructor(title: string, author: string, protected language: string) {
		super(title, author)
	}

	private setBorrower(user: User): void {
		this.borrower = user
	}

	private setBorrowed(condition: boolean): void {
		this.borrowed = condition
	}

	getBorrower(): User | null {
		if (this.borrower !== null) {
			return this.borrower
		}
		return null
	}

	getBorrowed(): boolean {
		return this.borrowed
	}

	borrow(user: User): string {
		if (this.borrowed) {
			return `${this.title} is already borrowed.`
		} else {
			this.setBorrowed(true)
			this.setBorrower(user)
			return `${this.title} has been borrowed by ${user.getName()}`
		}
	}

	toString() {
		return [
			`Title: ${this.title}`,
			`Author: ${this.author}`,
			`Language: ${this.language}`,
			`Borrowed: ${this.borrowed}`,
			`Borrower: ${this.borrower?.toString()}\n`
		].join('\n')
	}
}

class User {
	private id: string
	private name: string
	private email: string

	constructor(id: string, name: string, email: string) {
		this.id = id
		this.name = name
		this.email = email
	}

	getId(): string {
		return this.id
	}

	getName(): string {
		return this.name
	}

	getEmail(): string {
		return this.email
	}

	toString() {
		return [
			`ID: ${this.id}`,
			`Name: ${this.name}`,
			`Email: ${this.email}`,
		].join('\n')
	}
}

class Libray {
	private catalog: Item[] = []

	addItem(item: Item): string {
		this.catalog.push(item)
		return `${item.title} has been added to the library catalog.`
	}

	removeItem(item: Item): string {
		const index = this.catalog.indexOf(item)

		if (index !== -1) {
			this.catalog.splice(index, 1)

			return `${item.title} has been removed from the library catalog.`
		} else {
			return `${item.title} was not found in the library catalog.`
		}
	}

	showCatalog(): Item[] {
		return this.catalog
	}
}

const book1 = new Book('Behind the blue wall', 'Ian Selmer', 'Portuguese')
const user = new User(randomUUID(), 'Célia', 'celia@contact.com')
const library = new Libray()

console.log(library.addItem(book1))
console.log('Library Catalog: ', library.showCatalog())
console.log(book1.toString())
console.log(book1.borrow(user))
console.log(book1.getBorrowed())
console.log(book1.getBorrower())
console.log(book1.toString())
console.log('Library Catalog: ', library.showCatalog())

// funcionalities
// catalog available items for borrow
// borrow registration, including user and return date
// borrow history and status for each item