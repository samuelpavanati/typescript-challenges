enum ContactCategory {
	Personal,
	Professional,
	Other
}

interface Contact {
	name: string
	category: ContactCategory
	email: string
	birthday?: Date
}

const contacts: Contact[] = []

const firstContact: Contact = { name: 'Delta', category: ContactCategory.Personal, email: 'delta@example.com', birthday: new Date('2000-11-09') }
const secondContact: Contact = { name: 'Helena', category: ContactCategory.Professional, email: 'helena@example.com', birthday: new Date('2003-12-01') }

function addContact(contacts: Contact[], contact: Contact): Contact{
	contacts.push(contact)
	return contact
}

function removeContact(contacts: Contact[], name: string) {
	contacts = contacts.filter(contact => contact.name !== name)
	return contacts
}

function searchContact(contacts: Contact[], name: string) {
	return contacts.filter(contact => contact.name.toLowerCase() === name.toLowerCase())
}

function listContacts(contacts: Contact[], category: ContactCategory): Contact[] {
	return contacts.filter(contact => contact.category === category)
}

console.log(addContact(contacts, firstContact))
console.log(addContact(contacts, secondContact))
console.log(removeContact(contacts, 'Delta'))
console.log(searchContact(contacts, 'Helena'))
console.log(listContacts(contacts, 0))
