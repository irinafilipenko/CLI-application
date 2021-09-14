const fs = require('fs/promises')
const path = require('path')

const contactsPath = path.join(__dirname, './db/contacts.json')

const { v4 } = require('uuid')

const updateContacts = async (contacts) => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts))
}

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath)
    const contacts = JSON.parse(data)
    return contacts
  } catch (error) {
    throw error
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts()
    const contact = contacts.find((item) => item.id.toString() === contactId)

    if (!contact) {
      throw new Error('ID incorrect')
    }

    return contact
  } catch (error) {
    throw error
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await listContacts()
    const idx = contacts.findIndex((item) => item.id.toString() === contactId)

    if (!idx) {
      throw new Error('ID incorrect')
    }

    contacts.splice(idx, 1)
    await updateContacts(contacts)
    return 'Success remove'
  } catch (error) {
    throw error
  }
}

async function addContact(name, email, phone) {
  try {
    const newContact = { id: v4(), name, email, phone }
    const contacts = await listContacts()
    contacts.push(newContact)
    await updateContacts(contacts)
    return newContact
  } catch (error) {
    throw error
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
}
