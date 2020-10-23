import loadAllContacts from "../loaders/loaders.js"

function getContacts() {
    return loadAllContacts()
}

function getContactByName(name) {
    const contacts = getContacts();
    const contact = contacts.find((contact) =>
        contact.name.toLowerCase() === name.toLowerCase());

    if (contact) {
        return contact;
    }
    // In case name doesn't exist
    throw "Contact with name: " + name + " doesn't exist. Please try again."
}

function addNewContact(newContact) {
    const contacts = getContacts();
    let existing_names = contacts.map(item => item.name);
    console.log('Existing names are ' + existing_names);
    console.log('newContact ' + newContact);

    const isExist = existing_names.find(el =>
        el.toLowerCase() === newContact.name.toLowerCase());
    
    // when isExists is undefined, 
    // that means that we don't have any contact with the same name, 
    // so we are allowed to add it
    if (!isExist) {
        contacts.push(newContact);
        return;
    }
    throw 'This user already exists.';
}

const services = { getContacts, getContactByName, addNewContact }

export default services;