const contactsOperations = require('./contacts')

const workWithContacts = async (type = 'listContacts', id, data) => {
  try {
    switch (type) {
      case 'listContacts':
        return await contactsOperations.listContacts()
    }
  } catch (error) {
    throw error
  }
}

workWithContacts('listContacts')
  .then((data) => console.log(data[0]))
  .catch((error) => console.log(error))
