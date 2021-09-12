const contactsOperations = require('./contacts')

const workWithContacts = async (type = 'listContacts', id, data) => {
  try {
    switch (type) {
      case 'listContacts':
        return await contactsOperations.listContacts()
      case 'getContactById':
        return await contactsOperations.getContactById(id)
      case 'removeContact':
        return await contactsOperations.removeContact(id)
      case 'addContact':
        return await contactsOperations.addContact(id, data)
    }
  } catch (error) {
    throw error
  }
}

// workWithContacts('listContacts')
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))

// workWithContacts('getContactById', 9)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))

// workWithContacts('removeContact', 8)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))

const newData = {
  name: 'Rina Filipenko',
  email: 'abyoo15532@gmail.com',
  phone: '(068)5738598',
}

workWithContacts('addContact', '', newData)
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
