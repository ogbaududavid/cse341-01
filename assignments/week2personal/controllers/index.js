const contactDB = require("../contacts.json")
const getContacts = (req, res, next) => {
    res.json(contactDB)
}

module.exports = { getContacts }