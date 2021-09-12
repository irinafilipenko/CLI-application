const fs = require('fs/promises')
const path = require('path')
const contacts = require('./db/contacts.json')

const contactsPath = path.join(__dirname, './db/contacts.json')

const { v4 } = require('uuid')

const updateContacts = async (newContacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(newContacts))
}

// TODO: задокументировать каждую функцию
async function listContacts() {
  return contacts
}

async function getContactById(contactId) {
  const contacts = await listContacts()
  const contact = contacts.find((item) => item.id === contactId)
  if (!contact) {
    return null
  }
  return contact
}

async function removeContact(contactId) {
  const contacts = await listContacts()
  const idx = contacts.findIndex((item) => item.id === contactId)
  if (idx === -1) {
    return null
  }
  contacts.splice(idx, 1)
  await updateContacts(contacts)
  return 'Success remove'
}

async function addContact(data) {
  const contacts = await listContacts()
  const newContact = { ...data, id: { v4 } }
  contacts.push(newContact)
  await updateContacts(contacts)
  return newContact
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
}
