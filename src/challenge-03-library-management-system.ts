import { randomUUID } from 'crypto'

interface Status {
  borrowBook(book: Book, user: User): string
}

class Item {
	constructor(public title: string, public author: string) {}
}

class Book extends Item {
	private borrowed: boolean = false
	private borrower: User | null = null
	private returnDate: Date = new Date()
	private returnedIn: Date = new Date()

	constructor(title: string, author: string, protected language: string) {
		super(title, author)
	}

	setBorrower(user: User | null): void {
		this.borrower = user
		const currentDate = new Date()
		this.returnDate.setDate(currentDate.getDate() + 7)
	}

	setBorrowed(condition: boolean): void {
		this.borrowed = condition
	}

	setReturnedIn(date: Date): void {
		this.returnedIn.setDate(date.getDate())
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

	getReturnDate(): Date {
		return this.returnDate
	}

	getReturnedIn(): Date {
		return this.returnedIn
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

	setName(name: string): void {
		this.name = name
	}
	
	setEmail(email: string): void {
		this.email = email
	}

	toString(): string {
		return [
			`ID: ${this.id}`,
			`Name: ${this.name}`,
			`Email: ${this.email}`,
		].join('\n')
	}
}

class Libray implements Status {
	private catalog: Book[] = []

	addBook(book: Book): string {
		this.catalog.push(book)
		return `${book.title} has been added to the library catalog.`
	}

	removeBook(book: Book): string {
		const index = this.catalog.indexOf(book)

		if (index !== -1) {
			this.catalog.splice(index, 1)
			return `${book.title} has been removed from the library catalog.`
		} else {
			return `${book.title} was not found in the library catalog.`
		}
	}

	borrowBook(book: Book, user: User): string {
		if (book.getBorrowed()) {
			return `${book.title} is already borrowed.`
		} else {
			book.setBorrowed(true)
			book.setBorrower(user)
			const currentDate = new Date()
			book.setReturnedIn(currentDate)

			return `${book.title} has been borrowed by ${user.getName()}`
		}
	}

	returnBook(book: Book): string {
		book.setBorrowed(false)
		book.setBorrower(null)
		return `The book ${book.title} was returned to the library.`
	}

	showBooksAvailable(): Book[] {
		const booksAvailable: Book[] = []

		this.catalog.forEach(book => {
			if (!book.getBorrowed()) {
				booksAvailable.push(book)
			}
		})

		return booksAvailable
	}

	showBooksBorrowed(): Book[] {
		const booksBorrowed: Book[] = []

		this.catalog.forEach(book => {
			if (book.getBorrowed()) {
				booksBorrowed.push(book)
			}
		})

		return booksBorrowed
	}

	showCatalog(): Book[] {
		return this.catalog
	}
}

const book1 = new Book('Behind the blue wall', 'Ian Selmer', 'Portuguese')
const book2 = new Book('White Sky', 'Silas Malon', 'English')
const user = new User(randomUUID(), 'Célia', 'celia@contact.com')
const library = new Libray()

console.log(library.addBook(book1))
console.log(library.addBook(book2))
console.log('Library Catalog: ', library.showCatalog())

console.log(book1.toString())
console.log(library.borrowBook(book1, user))
console.log(book1.getBorrowed())
console.log(book1.getBorrower())
console.log(book1.toString())
console.log('Library Catalog: ', library.showCatalog())
console.log('Books Available: ', library.showBooksAvailable())
console.log('Books Borrowed: ', library.showBooksBorrowed())
console.log(`Return Date of book ${book1.title}`, book1.getReturnDate())
console.log('Return Book: ', library.returnBook(book1))

console.log('Library Catalog: ', library.showCatalog())