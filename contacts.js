const fs = require('fs/promises')
const path = require('path')

const contactsPath = path.join(__dirname, './db/contacts.json')

const { v4 } = require('uuid')

const updateContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.log(error)
  }
}

async function listContacts() {
  try {
    const contacts = await updateContacts()
    console.table(contacts)
  } catch (error) {
    console.log(error)
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await updateContacts()

    const contact = contacts.find(
      (contact) => String(contact.id) === String(contactId),
    )

    if (!contact) {
      return null
    }

    console.table(contact)
  } catch (error) {
    console.log(error)
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await updateContacts()
    const contact = await getContactById(contactId)

    if (!contact) {
      return null
    }

    await fs.writeFile(
      contactsPath,
      JSON.stringify(
        contacts.filter((contact) => String(contact.id) !== String(contactId)),
        null,
        2,
      ),
    )

    console.table(await updateContacts())
  } catch (error) {
    console.log(error)
  }
}

async function addContact(name, email, phone) {
  try {
    const contacts = await updateContacts()
    const id = v4()
    const contact = { id, name, email, phone }

    console.table(contact)

    await fs.writeFile(
      contactsPath,
      JSON.stringify([...contacts, contact], null, 2),
    )

    console.table(await readContacts())
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
}
