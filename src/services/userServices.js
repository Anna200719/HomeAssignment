import loadAllContacts from "../loaders/loaders.js"

function getContacts () {
    return loadAllContacts()
}

const services = {getContacts}

export default services;