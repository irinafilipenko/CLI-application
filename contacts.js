const fs = require('fs/promises')
const path = require('path')

// const filePath = path.join(__dirname, "products.json");

const contactsPath = path.join(__dirname, './db/contacts.json')

// TODO: задокументировать каждую функцию
async function listContacts() {
  return contacts
}

async function getContactById(contactId) {
  const contacts = await listContacts()
  const contact = contact.find((item) => item.id === contactId)
  if (!contact) {
    return null
  }
  return contact
}

// function removeContact(contactId) {
//   // ...твой код
// }

// function addContact(name, email, phone) {
//   // ...твой код
// }

module.exports = {
  listContacts,
}
