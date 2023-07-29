import { v4 as uuid } from 'uuid'

const DEFAULT_CONTACTS_KEY = 'contacts'

function saveContacts(contacts) {
    localStorage.setItem(DEFAULT_CONTACTS_KEY, JSON.stringify(contacts))
}

export function createContact(contact) {
    const contacts = getContacts();

    // VALIDA OS DADOS DO CONTATO
    // contacts.find(contact => )

    contacts.push({
        ...contact,
        id: uuid()
    });
    saveContacts(contacts)
}

export function updateContact({id, ...contact}) {
    const savedContact = getContactById(id);
    if(!savedContact) throw new Error('Contact not found!');
    const contacts = getContacts();
    const index = contacts.indexOf(contacts);
    contacts[index] = {
        ...contacts[index],
        ...contact
    }
    saveContacts(contacts)
}

export function deleteContact(id) {
    const savedContact = getContactById(id);
    if(!savedContact) throw new Error('Contact not found!');
    const contacts = getContacts().filter(contact => contact.id !== id);
    saveContacts(contacts)
}

export function getContacts() {
    return JSON.parse(localStorage.getItem(DEFAULT_CONTACTS_KEY) || [])
}

export function getContactById(id) {
    const contacts = getContacts();
    return contacts.find(contact => contact.id === id);
}