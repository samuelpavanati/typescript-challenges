// Interface for contact
interface Contact {
  name: string;
  category: ContactCategory;
  // Optional fields
  birthday?: Date;
  address?: string;
}

// Enum for contact categories
enum ContactCategory {
  Personal,
  Work,
  Other
}

// Interface for API response
interface APIResponse<T> {
  status: number;
  data: T;
}

// Example usage
interface UserData {
  contacts: Contact[];
}

const response: APIResponse<UserData> = {
	status: 200,
	data: {
		contacts: [
			{ name: 'Alice', category: ContactCategory.Personal, birthday: new Date('1990-01-01'), address: '123 Main St' },
			{ name: 'Bob', category: ContactCategory.Work, address: '456 Broadway' }
		]
	}
}

console.log(response)

// Contact agenda class
class ContactAgenda {
	private contacts: Contact[]

	constructor() {
		this.contacts = []
	}

	// Add a new contact
	addContact(contact: Contact): void {
		this.contacts.push(contact)
	}

	// Remove a contact by name
	removeContact(name: string): void {
		this.contacts = this.contacts.filter(contact => contact.name !== name)
	}

	// Search contacts by name or category
	searchContacts(searchTerm: string, category?: ContactCategory): Contact[] {
		return this.contacts.filter(contact =>
			contact.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (category === undefined || contact.category === category)
		)
	}

	// List all contacts or by category
	listContacts(category?: ContactCategory): Contact[] {
		return category ? this.contacts.filter(contact => contact.category === category) : this.contacts
	}
}

// Example usage of ContactAgenda
const agenda = new ContactAgenda()
agenda.addContact({ name: 'Charlie', category: ContactCategory.Other })
agenda.addContact({ name: 'David', category: ContactCategory.Personal, birthday: new Date('1985-05-05') })

console.log(agenda.searchContacts('A'))
console.log(agenda.listContacts(ContactCategory.Personal))
