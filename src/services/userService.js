import loadAllContacts from "../loaders/loaders.js"

function getContacts() {
    return loadAllContacts()
}

function getContactByName(name) {
    const contacts = getContacts();
    const contact = contacts.find((contact) => 
        contact.name.toLowerCase() === name.toLowerCase());
        
    if (contact)
    {
        return contact;
    }
    // In case name doesn't exist
    throw "Contact with name: " + name + " doesn't exist. Please try again."
}

const services = { getContacts, getContactByName }

export default services;