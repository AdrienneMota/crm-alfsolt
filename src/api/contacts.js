import { v4 as uuid } from 'uuid'

const DEFAULT_CONTACTS_KEY = 'contacts'

function saveContacts(contacts) {
    localStorage.setItem(DEFAULT_CONTACTS_KEY, JSON.stringify(contacts))
}

export function createContact(contact) {
    const contacts = getContacts();

    const emailExist = getContactByEmail(contact.email)
    const contactExist = getContactByContact(contact.contact)

    if(emailExist || contactExist){
        throw new Error('Contact already exist!');
    }

    contacts.push({
        ...contact,
        id: uuid()
    });
    saveContacts(contacts)
}

export function updateContact({id, ...contact}) {
    const savedContact = getContactById(id);
    if(!savedContact) throw new Error('Contact not found!');

    const emailExist = getContactByEmail(contact.email)
    const contactExist = getContactByContact(contact.contact)

    if(emailExist || contactExist){
        throw new Error('Contact already exist!');
    }

    const contacts = getContacts();
    const index = contacts.findIndex(contact => contact.id === id);
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
    return JSON.parse(localStorage.getItem(DEFAULT_CONTACTS_KEY)) || []
}

export function getContactsByUserId(userId) {
    const contacts = getContacts();
    return contacts.filter(contact => contact.user_id === userId)
}

export function getContactById(id) {
    const contacts = getContacts();
    return contacts.find(contact => contact.id === id);
}

export function getContactByEmail(email) {
    const contacts = getContacts();
    return contacts.find(contact => contact.email === email);
}

export function getContactByContact(contact) {
    const contacts = getContacts();
    return contacts.find(contact => contact.contact === contact);
}